var posts = [
  {
    id: 1,
    title: 'Bananas',
    author: 1,
    body: 'Lorem ipsum dolor **sit amet**, consectetur adipiscing elit. _Proin tincidunt_ eros elementum nibh iaculis laoreet sit amet ut mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat felis non ipsum malesuada luctus. Morbi non tellus placerat, dignissim lorem eget, molestie ipsum. Pellentesque molestie et nisi eget accumsan. In sapien ligula, vehicula vel odio nec, tempor cursus libero.',
    date: new Date(2015, 1, 2)
  },
  {
    id: 2,
    title: 'Apples',
    author: 1,
    body: 'Donec consectetur purus elit, ut imperdiet neque ultrices quis. Morbi ligula lorem, placerat et varius sed, accumsan nec dui. Maecenas commodo porta ultrices. Integer felis enim, iaculis at ipsum in, mattis hendrerit mauris. Aliquam sollicitudin feugiat facilisis. Duis ut orci luctus, hendrerit nisl eget, ullamcorper urna. Etiam consectetur lobortis ipsum sit amet rhoncus. Vivamus tempus a lorem nec dictum. Nunc placerat augue quis ante egestas semper. Cras in ex quis dolor feugiat scelerisque vitae vel libero.',
    date: new Date(2015, 2, 3)
  }
];
var authors = [{
  id: 1,
  name: 'George',
  posts: [1, 2]
}];

module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': posts,
      'authors': authors
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var post;

    for (var i = 0, il = posts.length; i < il; i++) {
      if (posts[i].id === id) {
        post = posts[i];
        break;
      }
    }


    if (typeof post !== 'undefined') {
      res.send({
        'post': post,
        'authors': authors
      });
    } else {
      res.status(404).end();
    }
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
