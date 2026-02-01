const mongoose = require('mongoose');
require('dotenv').config();
const Blog = require('./models/Blog');

const blogs = [
  {
    title: '30 Days of Journaling: How It Changed Me',
    subtitle: 'I never thought writing a few lines each day could change my mindset. But 30 days later, I found myself more self-aware, lighter, and stronger.',
    content: `When I started journaling, I didn't expect much. It felt awkward at first — writing to myself, about myself. But I committed to 30 days, and by the end, something remarkable happened.

The first week was the hardest. I would stare at blank pages, unsure what to write. But then I realized — there are no rules. I could write about my day, my fears, my dreams, or nothing at all. It was my space.

By week two, patterns started emerging. I noticed my anxious thoughts, my recurring worries, and slowly, I began to understand them. Writing them down made them less scary, less overwhelming.

Week three brought clarity. I could see my growth, my struggles, and most importantly — my strength. Each entry was a reminder that I was trying, that I was here, fighting.

Now, 30 days later, journaling isn't just a habit. It's my safe space, my therapist, my friend. And I'm not stopping anytime soon.`,
    author: 'Mind Bridge Community',
    featured: true
  },
  {
    title: 'Small Victories, Big Changes',
    subtitle: 'Getting out of bed, eating a meal, finishing a journal page — these small wins became the foundation of my healing.',
    content: `For the longest time, I thought healing meant grand gestures. Going to therapy, reading self-help books, having breakthrough moments. But healing, I've learned, is quieter than that.

It's getting out of bed when your body feels like lead. It's eating a full meal when anxiety has stolen your appetite. It's finishing one journal page when your mind is racing.

These aren't small things. They're monumental. And for so long, I dismissed them. I told myself they didn't count, that I wasn't doing enough. But now I know better.

Every small victory is a step forward. Every moment you choose yourself is an act of courage. And when you string these moments together — day after day, week after week — you realize you've climbed a mountain, one small step at a time.

So celebrate the small wins. They're not small at all. They're everything.`,
    author: 'Mind Bridge Community',
    featured: true
  },
  {
    title: 'Learning to Be Kind to Myself',
    subtitle: 'For years, I was my own harshest critic. Here\'s how I started practicing self-compassion, one small step at a time.',
    content: `I've always been good at being kind to others. When a friend struggled, I offered comfort. When someone made a mistake, I showed understanding. But when it came to myself? I was ruthless.

Every mistake was proof I wasn't good enough. Every setback was evidence I would never succeed. I carried this weight for years, not realizing I was drowning under my own expectations.

Then one day, someone asked me: "Would you talk to your best friend the way you talk to yourself?" The answer was a clear no. And that question changed everything.

I started small. When I made a mistake, instead of spiraling, I would pause. I would ask: "What would I tell a friend?" And slowly, I extended that same grace to myself.

It wasn't easy. Old patterns don't disappear overnight. But with time, self-compassion became less foreign, less uncomfortable. It became a practice, a daily choice.

Now, when I stumble, I remind myself: I'm human. I'm trying. And that's enough.

If you're reading this and you're hard on yourself — please know: you deserve the same kindness you give to others. Start small. Start today.`,
    author: 'Mind Bridge Community',
    featured: true
  }
];

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mindbridge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('✅ MongoDB Connected');
  
  // Clear existing blogs
  await Blog.deleteMany({});
  console.log('🗑️  Cleared existing blogs');
  
  // Insert new blogs
  await Blog.insertMany(blogs);
  console.log('✅ Seeded 3 blog posts');
  
  process.exit(0);
})
.catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
