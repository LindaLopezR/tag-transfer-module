import { Template } from 'meteor/templating';
import TransferView from './components/TransferView';

import './tagTransfer.html';

Template.tagTransfer.helpers({

  TransferView() {
    return TransferView;
  }

});
