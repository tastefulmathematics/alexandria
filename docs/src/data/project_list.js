import { tasteful_mathematics_document_list } from './tasteful_mathematics.js';
import { basic_document_list } from './basic.js';
import { highly_technical_data_document_list } from './highly_technical_data.js';
import { completeDocumentList }from './document_listing.js';

export const completeProjectList = [
  {
    key: "tastefulmathematics",
    title: "Tasteful Mathematics",
    component: "document-viewer",
    created_ts: "20200118",
    status: "primary",
    documentList: completeDocumentList.filter(document => document.project == 'tastefulmathematics'),
    directory: "./../tasteful_mathematics/"
  },
  {
    key: "highlytechnicaldata",
    title: "Highly Technical Data",
    component: "document-viewer",
    created_ts: "20200118",
    status: "primary",
    documentList: completeDocumentList.filter(document => document.project == 'highlytechnicaldata'),
    directory: "./../highly_technical_data/"
  },
  {
    key: "basic",
    title: "b.ASIC",
    component: "document-viewer",
    created_ts: "20200118",
    status: "primary",
    documentList: completeDocumentList.filter(document => document.project == 'basic'),
    directory: "./../basic/"
  },
  {
    key: "rotelearning",
    title: "Rote Learning",
    component: "rote-learner",
    created_ts: "20200118",
    status: "primary",
    documentList: completeDocumentList.filter(document => document.project == 'rotelearning'),
  },
];
