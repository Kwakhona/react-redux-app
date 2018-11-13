import { connect } from 'react-redux';

import CategoryScience from '../components/category-science';

const mapStateToProps = (state) => {

    return {
        categoryScience: state.categoryScience
    };
};


export default connect(
    mapStateToProps
)(CategoryScience);
