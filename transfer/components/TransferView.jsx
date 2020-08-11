import React from 'react';

class TransferView extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <h2>
            <i class="share icon" />{' '}
            {TAPi18n.__("transfers")}
          </h2>
        </div>
      </div>
    );
  }
}

export default TransferView;
