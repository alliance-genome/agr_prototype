import React, {Component} from 'react';

import DataSourceLink from '../../components/dataSourceLink';

import style from './style.css';

class DataSourceCard extends Component {
  render() {
    let d = this.props.sourceData;
    let speciesClass = style[d.species.replace(' ', '-')];
    let dataProvider=d.dataProvider;
    if(d.primaryId.search(/dataProvider/)<0){
      var idParts=d.primaryId.split(/:/);
      if(idParts.length>1){
        dataProvider=idParts[0];
      }
    }
    return (
      <div className='card'>
        {speciesClass && <div className={`${style.speciesIcon} ${speciesClass}`} />}
        <div className='card-block'>
          <dl className='row'>
            <dt className='col-sm-5'>Species</dt>
            <dd className='col-sm-7'><i>{d.species}</i></dd>
            <dt className='col-sm-5'>Primary Source</dt>
            <dd className='col-sm-7'>
              <DataSourceLink dataProvider={dataProvider} id={d.primaryId} omitPrefix />
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}

DataSourceCard.propTypes = {
  sourceData: React.PropTypes.shape({
    species: React.PropTypes.string.isRequired,
    dataProvider: React.PropTypes.string.isRequired,
    primaryId: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default DataSourceCard;
