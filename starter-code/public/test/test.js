QUnit.module('Article Constructor', function () {
  QUnit.test('Article should create a new Arcticle', function (assert) {
    //DONE TODO: write a test for the Article constructor
    var article = {
      title: 'Transmitting Open-source Arrays',
      category: 'firewall',
      author: 'Dr. Tressie Kuphal',
      authorUrl: 'http://http://corrine.net',
      publishedOn: '2014-01-22',
      body: '## The RSS sensor is down'
    }

    var thisGuy = new Article(article);
    var result = thisGuy.category;
    assert.equal(result, 'firewall');
  });

  QUnit.test('Article instance should have a method toHtml', function (assert) {
    //DONE TODO: verify that an instance of article has a toHtml method
    var article = {
      title: 'Transmitting Open-source Arrays',
      category: 'firewall',
      author: 'Dr. Tressie Kuphal',
      authorUrl: 'http://http://corrine.net',
      publishedOn: '2014-01-22',
      body: '## The RSS sensor is down'
    }
    var thisGuy = new Article(article);
    if (typeof thisGuy.toHtml === 'function'){
      var result = true;
    }

    assert.equal(result, true);

  });
});

QUnit.module('Article Class', function () {
  QUnit.test('Article.allArticles should be an array', function (assert) {
    //DONE TODO: write a test for the all articles property
    var article = {
      title: 'Transmitting Open-source Arrays',
      category: 'firewall',
      author: 'Dr. Tressie Kuphal',
      authorUrl: 'http://http://corrine.net',
      publishedOn: '2014-01-22',
      body: '## The RSS sensor is down'
    };
    var thisGuy = new Article(article);
    Article.all.push(thisGuy)

    if (Array.isArray(Article.all)){
      var result = true;
    }

    assert.equal(result, true);



  });
  QUnit.test('Article.loadAll should set an array of Article instances', function (assert) {
    //TODO: write a test for article loadAll
    //remember to reset anything that changed about your global
    //environment at the end of the test!
  });
  QUnit.test('Article.allAuthors should get unique author names', function (assert) {
    //TODO: write a test for Article.allAuthors
  });
  //STRETCH: write a test for Article.numWordsAll
  //STRETCH: write a test for Article.fetchAll
})
