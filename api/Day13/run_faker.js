const newman = require('newman');
const faker = require('faker');

// توليد بيانات وهمية ديناميكيًا
const fakePost = {
  userId: Math.floor(Math.random() * 100),
  title: faker.lorem.sentence(),
  body: faker.lorem.paragraph()
};

// طباعة البيانات لتأكيدها
console.log("Generated Fake Post:", fakePost);

// إعداد مجموعة الاختبار
newman.run({
 // collection: require('./api/Day13/Day13_newmanFaker_E2E.postman_collection.json'),
 collection: require('./Day13_newmanFaker_E2E.postman_collection.json'),

  environment: {
    values: [
      { key: "userId", value: fakePost.userId.toString() },
      { key: "title", value: fakePost.title },
      { key: "body", value: fakePost.body }
    ]
  },
  reporters: ['cli', 'htmlextra'],
  reporter: {
    htmlextra: {
      export: './api/Day13/newman_faker_external_report.html',
      title: 'Postman + Faker.js External Run'
    }
  }
}, function (err) {
  if (err) throw err;
  console.log('Collection run complete with Faker.js input 🚀');
});
