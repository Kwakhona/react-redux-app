import  React, { Component } from 'react'
import { getCategories, getCategoryScience } from '../actions/actionCreators';
import GetCategoryScience from '../containers/getCategoryScience';
import { setCategory } from '../actions/actionCreators';

class Categories extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const { dispatch, } = this.props;

        if(dispatch) {
            dispatch(getCategories());
        }

    }

    handleChange(category) {
        this.props.dispatch(getCategoryScience(category));
    }

    render() {
        const { categoriesRequest, categoriesSuccess, categoriesFailure } = this.props.categories;

        return (
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            {
                                (categoriesRequest && categoriesRequest.loading) ?
                                    <div>Loading categories...</div>
                                    : (categoriesFailure && !categoriesFailure.loading && categoriesFailure.error) ?
                                        <div className="alert alert-danger">{categoriesFailure.error}</div>
                                    :
                                    <select className="custom-select" onChange={e => this.handleChange(e.target.value)} value={this.props.value}>
                                        {categoriesSuccess.categories.map(option => (
                                            <option value={option} key={option}>
                                            {option}
                                            </option>
                                        ))}
                                    </select>
                            }
                        </div>
                    </div>
                    <div className="row">
                            <div className="col">
                                  <GetCategoryScience category={this.props.value ? this.props.value: categoriesSuccess.categories[0] ? categoriesSuccess.categories[0]: 'explicit'} />
                            </div>
                    </div>
                </div>
            </div>
        );
      }
}

export default Categories;