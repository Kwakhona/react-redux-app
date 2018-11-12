import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategoryScience } from '../actions/actionCreators';

class CategoryScience extends Component {

    componentDidMount() {
        const { dispatch, category } = this.props;

        if(dispatch) {
            dispatch(getCategoryScience(category));
        }
    }

    render() {
        const { categoryScienceRequest, categoryScienceSuccess, categoryScienceFailure } = this.props.categoryScience;

        // console.log(this.props);
        return (
            <div className="row">
                <div className="col">
                {(categoryScienceRequest && categoryScienceRequest.loading)?
                    <div>Loading {this.props.category}...</div>
                    : (categoryScienceFailure && !categoryScienceFailure.loading && categoryScienceFailure.error && categoryScienceFailure.error != null) ?
                        <div className="alert alert-danger">{categoryScienceFailure.error}</div>
                    :
                    <div className="card">
                        <img className="card-img-top" src={categoryScienceSuccess.categoryScience.icon_url} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">
                                {categoryScienceSuccess.categoryScience.value}
                            </p>
                        </div>
                    </div>
                }
                </div>
            </div>
        );
      }
}

CategoryScience.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

export default CategoryScience;