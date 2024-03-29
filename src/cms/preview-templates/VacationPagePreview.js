import React from 'react';
import PropTypes from 'prop-types';
import { VacationPackageTemplate } from '../../templates/vacation-package';

const VacationsPreview = ({ entry, widgetFor }) => (
  <VacationPackageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

VacationsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default VacationsPreview;
