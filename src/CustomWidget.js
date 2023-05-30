import * as React from 'react'


export default class CustomWidget extends React.Component {
  state = {
    open: false
  }

  toggleOpenClose = () => this.setState((state, _) => ({ open: !state.open }))

  render() {
    return(
      <div>
        <button
          onClick={this.toggleOpenClose}
          style={{ marginRight: '100%' }}
        >
          Widget
        </button>
        {this.state.open &&
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              fontWeight: 'bold'
            }}
          >
            Custom React Map Widget!
          </div>
        }
      </div>
    )
  }
}
