const handler = require('./handler');

const routes = [
  {
    path: '/notes',
    method: 'POST',
    handler: handler.addNoteHandler,
  },
  {
    path: '/notes',
    method: 'GET',
    handler: handler.getAllNoteHandler,
  },
  {
    path: '/notes/{id}',
    method: 'GET',
    handler: handler.getNoteByIdHandler,
  },
  {
    path: '/notes/{id}',
    method: 'PUT',
    handler: handler.editNoteByIdHandler,
  },
  {
    path: '/notes/{id}',
    method: 'DELETE',
    handler: handler.deleteNoteByIdHandler,
  },
];

module.exports = routes;
