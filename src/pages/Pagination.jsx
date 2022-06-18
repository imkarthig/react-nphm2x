import React, { Component } from 'react';
import '../css/paginationstyle.css';
class Pagination extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        isdata: false,
        pagelimit: 5,
        page: 1
    }
    data = [];
    filterData = [];

    displayHead() {
        console.log('displayHead')
        if (this.state.isdata) {
            let keys = Object.keys(this.data[0]);
            return keys.map(eachKey => <th className='p-table-head' key={eachKey}>{eachKey}</th>)
        } else {
            return null
        }
    }

    eachRow(data) {
        let keys = Object.keys(data);
        return keys.map(eachKey => <td  className='p-table-data' key={eachKey}>{data[eachKey]}</td>)
    }

    displayBody() {
        if (this.state.isdata) {
            console.log('displayBody')
            return this.filterData.map(eachKey => <tr className='p-table-row' key={'row' + eachKey.id}>{this.eachRow(eachKey)}</tr>)
        } else {
            return null
        }
    }
    displayPage() {
        let start = (this.state.page - 1) * this.state.pagelimit;
        let end = start + this.state.pagelimit;
        this.filterData = this.data.slice(start, end);
        return this.displayBody();
    }
    generateButton() {
        let pageButtons = [];
        let start = this.state.page - 2 < 1 ? 1 : this.state.page - 2;
        let end = this.state.page + 2 <= this.findLastpage() ? this.state.page + 2 : this.findLastpage();
        for (let i = start; i <= end; i++) {
            pageButtons.push(i);
        }
        return pageButtons.map(eachButton => {
            if (eachButton != this.state.page)
                return < button key={'button' + eachButton} onClick={() => this.setState({ page: eachButton })}>{eachButton}</button>
            else
                return < button className='active' key={'button' + eachButton} onClick={() => this.setState({ page: eachButton })}>{eachButton}</button>
        })


    }

    findLastpage() {
        return Math.ceil(this.data.length / this.state.pagelimit);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('https://jsonplaceholder.typicode.com/comments/')
            .then(response => response.json())
            .then(dataObj => {
                this.data = dataObj;
                console.log(dataObj)
                this.setState({ isdata: true });
            })
    }

    render() {
        console.log('render')
        let tableBody = <div>Loading ... </div>;
        let displayHeadings = this.displayHead();
        let displayBodyData = this.displayPage();
        let buttons = this.generateButton();

        if (this.state.isdata) {
            tableBody = (
                <table className='p-table'>
                    <thead><tr>{displayHeadings}</tr></thead>
                    <tbody>{displayBodyData}</tbody>
                </table>
            )
        }

        return (
            <div>
                <div className='p-button'>
                    < button className='p-button-s' onClick={() => this.setState({ page: 1 })}>First</button>
                     < button className='p-button-s' onClick={() => this.setState({ page: this.state.page-1 })}>Pre</button>
                    {buttons}
                     < button className='p-button-s' onClick={() => this.setState({ page:this.state.page+1 })}>Next</button>
                     < button className='p-button-s' onClick={() => this.setState({ page: this.findLastpage() })}>Last</button>
                </div>
             

                {tableBody}

            </div>
        )
    }
}

export default Pagination;