import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Content from '../components/Content'

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}

const ContentPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(Content)

export default ContentPage