import { tasteful_mathematics_document_list } from './tasteful_mathematics.js';
import { basic_document_list } from './basic.js';
import { highly_technical_data_document_list } from './highly_technical_data.js';

export const completeProjectList = [
  {
    key: "tastefulmathematics",
    title: "Tasteful Mathematics",
    component: "document-viewer",
    created_ts: "20200118",
    status: "primary",
    document_list: tasteful_mathematics_document_list,
    directory: "./../tasteful_mathematics/"
  },
  {
    key: "highlytechnicaldata",
    title: "Highly Technical Data",
    component: "document-viewer",
    created_ts: "20200118",
    status: "primary",
    document_list: highly_technical_data_document_list,
    directory: "./../highly_technical_data/"
  },
  {
    key: "basic",
    title: "b.ASIC",
    component: "document-viewer",
    created_ts: "20200118",
    status: "primary",
    document_list: basic_document_list,
    directory: "./../basic/"
  },
  {
    key: "rotelearning",
    title: "Rote Learning",
    component: "rote-learner",
    created_ts: "20200118",
    status: "primary",
    document_list: tasteful_mathematics_document_list,
  },
];
