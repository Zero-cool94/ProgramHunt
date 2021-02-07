'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Comments', [
        { userId: 1, programId: 1, comment: 'Super promising alternative to other design templates. Thanks for the PH offer. What does your pricing look like on this?', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 1, comment: 'Thanks for building this, much needed!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 1, comment: 'TermScout makes total sense.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 1, comment: 'Great work. Very helpful for the saas.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 1, comment: '"Less legal" sounds like a dream!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 2, comment: 'Great app with a big potential. Installed it. Good luck in promoting this useful product!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 2, comment: 'Looks good! Waiting for Android app.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 2, comment: "The app looks great. Too bad I'm using Android. Lol", createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 2, comment: 'I am looking forward to it on google play :)', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 2, comment: 'Looks really promising, keep up the good work.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 3, comment: 'This is awesome! Congrats on the launch.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 3, comment: 'Amazing product and congrats for the launch! 🚀', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 3, comment: 'Very impressed with this chat bot builder. It offers a ton of templates and is super easy to integrate.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 3, comment: 'Awesome Product.. Congrats Appy Pie for the Lunch.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 3, comment: "Great product. What's next?", createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 4, comment: 'Looks great! Congrats.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 4, comment: 'This app is blowing my mind 🤯', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 4, comment: 'Top, congratulations on the launch!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 4, comment: 'Great UX and impressive functionality.. 👍', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 4, comment: 'Great product! Quick and effective.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 5, comment: 'Brilliant! This will make life so much easier.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 5, comment: 'This is so cool!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 5, comment: 'Congrats on the Launch! But it sucks that majority of the locations in the commercial are not open due to covid...', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 5, comment: 'Suggesting based on locations nearby is great as well', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 5, comment: 'That offer a good value proposition guys, well done!!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 6, comment: 'I use this product to analyze interaction in teams and find bottlenecks, keep track of my network, and teach organizational network analysis.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 6, comment: 'I have used it for stakeholder mapping. Works great!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 6, comment: 'This gives me Roam Research vibes.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 6, comment: 'I really really wanted to like this. But I found building the maps difficult and unintuative.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 6, comment: 'Good for network tracking. Great!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 7, comment: 'Congrats on the launch! 💯', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 7, comment: 'Thank you for your feedback. Happy to know you Love your tool.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 7, comment: 'Amazing product! Congratulations on the launch Eric!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 7, comment: 'Wow! This background remover is fast and easy to use. Glad to have a free preview to download at a higher resolution.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 7, comment: 'Wow! Looks very useful. Great job! Congratulations 🖤', createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 8, comment: 'Looks nice. Also thanks for updating it. 🙏', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 8, comment: 'I have one hobby project and I needed several public APIs, I searched quite a lot. I wish I knew that your product existed :)', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 8, comment: 'I like the layout & sleek design. Well done!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 8, comment: 'Fantastic collection and easy to navigate.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 8, comment: "Love it, I think it's time for me to expand my skills a bit and try to build a bot!", createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 9, comment: 'Nice! Finally a cure to create 4K wallpapers out of my fav HD images.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 9, comment: 'Love the new enhancements! 🙌', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 9, comment: 'This is nice!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 9, comment: 'As always, Sticker Mule kills it! 💪🏻', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 9, comment: "Glad to see you're still working to improve these free software tools that you release!", createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 10, comment: 'I have been waiting for someone to provide this kind of solution at an affordable price point. Agencies and copywriters will eat this up. Great stuff!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 10, comment: 'AI-powered image editors like this are the future.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 10, comment: 'Great job Joe! Really exciting product', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 10, comment: "OMG! The best landing page I've seen this year. Congrats for the launch", createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 10, comment: 'This is so awesome! Such a useful product.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 11, comment: 'Super promising alternative to other design templates. Thanks for the PH offer. What does your pricing look like on this?', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 11, comment: 'Thanks for building this, much needed!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 11, comment: 'TermScout makes total sense.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 11, comment: 'Great work. Very helpful for the saas.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 11, comment: '"Less legal" sounds like a dream!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 12, comment: 'Great app with a big potential. Installed it. Good luck in promoting this useful product!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 12, comment: 'Looks good! Waiting for Android app.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 12, comment: "The app looks great. Too bad I'm using Android. Lol", createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 12, comment: 'I am looking forward to it on google play :)', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 12, comment: 'Looks really promising, keep up the good work.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 13, comment: 'This is awesome! Congrats on the launch.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 13, comment: 'Amazing product and congrats for the launch! 🚀', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 13, comment: 'Very impressed with this chat bot builder. It offers a ton of templates and is super easy to integrate.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 13, comment: 'Awesome Product.. Congrats Appy Pie for the Lunch.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 13, comment: "Great product. What's next?", createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 14, comment: 'Looks great! Congrats.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 14, comment: 'This app is blowing my mind 🤯', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 14, comment: 'Top, congratulations on the launch!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 14, comment: 'Great UX and impressive functionality.. 👍', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 14, comment: 'Great product! Quick and effective.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 15, comment: 'Brilliant! This will make life so much easier.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 15, comment: 'This is so cool!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 15, comment: 'Congrats on the Launch! But it sucks that majority of the locations in the commercial are not open due to covid...', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 15, comment: 'Suggesting based on locations nearby is great as well', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 15, comment: 'That offer a good value proposition guys, well done!!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 16, comment: 'I use this product to analyze interaction in teams and find bottlenecks, keep track of my network, and teach organizational network analysis.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 16, comment: 'I have used it for stakeholder mapping. Works great!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 16, comment: 'This gives me Roam Research vibes.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 16, comment: 'I really really wanted to like this. But I found building the maps difficult and unintuative.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 16, comment: 'Good for network tracking. Great!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 17, comment: 'Congrats on the launch! 💯', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 17, comment: 'Thank you for your feedback. Happy to know you Love your tool.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 17, comment: 'Amazing product! Congratulations on the launch Eric!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 17, comment: 'Wow! This background remover is fast and easy to use. Glad to have a free preview to download at a higher resolution.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 17, comment: 'Wow! Looks very useful. Great job! Congratulations 🖤', createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 18, comment: 'Looks nice. Also thanks for updating it. 🙏', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 18, comment: 'I have one hobby project and I needed several public APIs, I searched quite a lot. I wish I knew that your product existed :)', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 18, comment: 'I like the layout & sleek design. Well done!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 18, comment: 'Fantastic collection and easy to navigate.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 18, comment: "Love it, I think it's time for me to expand my skills a bit and try to build a bot!", createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 19, comment: 'Nice! Finally a cure to create 4K wallpapers out of my fav HD images.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 19, comment: 'Love the new enhancements! 🙌', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 19, comment: 'This is nice!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 19, comment: 'As always, Sticker Mule kills it! 💪🏻', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 19, comment: "Glad to see you're still working to improve these free software tools that you release!", createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, programId: 20, comment: 'I have been waiting for someone to provide this kind of solution at an affordable price point. Agencies and copywriters will eat this up. Great stuff!', createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, programId: 20, comment: 'AI-powered image editors like this are the future.', createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, programId: 20, comment: 'Great job Joe! Really exciting product', createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, programId: 20, comment: "OMG! The best landing page I've seen this year. Congrats for the launch", createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, programId: 20, comment: 'This is so awesome! Such a useful product.', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};