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

        return (
            <div className="row">
                <div className="col">
                {(categoryScienceRequest && categoryScienceRequest.loading)?
                    <div className="text-center">
                        <i className="fa fa-spinner fa-spin fa-2x"></i>
                    </div>
                    : (categoryScienceFailure && !categoryScienceFailure.loading && categoryScienceFailure.error && categoryScienceFailure.error != null) ?
                        <div className="alert alert-danger">{categoryScienceFailure.error}</div>
                    :
                    <div className="card">
                        <img className="card-img-top" src={categoryScienceSuccess.categoryScience.icon_url} alt="icon" />
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
    category: PropTypes.string,
    categoryScience: PropTypes.object,
    categoryScienceRequest: PropTypes.object,
    categoryScienceSuccess: PropTypes.object,
    categoryScienceFailure: PropTypes.object,
};

export default CategoryScience;