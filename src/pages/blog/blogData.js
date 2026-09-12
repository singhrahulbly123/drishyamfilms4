import story from '../../asstes/blog/1.png';
import festival from '../../asstes/blog/2.png';
import conversation from '../../asstes/blog/3.png';
import crew from '../../asstes/images/about-drishyam-process.png';
import masaan from '../../asstes/images/masaan-our-stories.jpg';
import siya from '../../asstes/images/siya/3.jpg';

export const posts = [
  { slug: 'where-a-story-begins', title: 'Where a story begins', category: 'Studio Notes', image: story, alt: 'A cinematic glimpse behind the picture', intro: 'Before the first frame, there is a feeling. Exploring the small, human moments that become stories for the big screen.', sections: [
    ['The moment before the screenplay', 'A story can begin with an overheard sentence, a familiar street or a question that refuses to leave. Before characters have names and scenes have numbers, there is often something much simpler: curiosity about another person’s life. Giving that curiosity time is the first creative act.'],
    ['Finding the human centre', 'A premise gives a film direction, but a character gives us a reason to follow it. What does this person want? What can they never say aloud? The most useful answers are often found in everyday details: the way someone waits, changes the subject or makes room for another person.', 'Developing a story means listening as carefully as writing. Research, conversation and observation help turn an idea into a world that feels lived in. Specificity makes that world tangible; emotional honesty lets an audience enter it.'],
    ['Making space for discovery', 'A first draft is a beginning, not a verdict. Reading a scene aloud can reveal its rhythm. A collaborator’s question can uncover an assumption. Sometimes the most meaningful rewrite is removing a line and trusting a glance to carry its weight.'],
    ['From a private feeling to a shared experience', 'Filmmaking brings many imaginations into conversation. A location, a performance, a sound and an edit each reshape the original impulse. The challenge is to welcome those discoveries while protecting the emotional centre that made the story worth telling.']
  ], quote: 'The first frame begins long before the camera starts rolling.' },
  { slug: 'taking-stories-across-borders', title: 'Taking stories across borders', category: 'Festivals', image: festival, alt: 'Cinema and the shared experience of a film screening', intro: 'Local roots. Universal emotions. A reflection on what happens when a film meets an audience far from home.', sections: [
    ['A different room, the same feeling', 'Every screening is a new conversation. Humour may land in unexpected places and a quiet scene may invite a different response. Watching with an unfamiliar audience reminds us that a film continues to grow after the final edit.'],
    ['The power of being specific', 'A film does not need to erase its local character to travel. The texture of a neighbourhood, a family ritual or the cadence of a language gives viewers something real to connect with. Subtitles carry words; performances, images and pauses carry much of the feeling.'],
    ['Beyond the screening', 'Festival conversations bring filmmakers, programmers and audiences into the same space. A thoughtful question can open a new way of seeing a scene. These exchanges make festivals places of discovery, as well as exhibition.']
  ], quote: 'A story can belong to one place and still find a home in many hearts.' },
  { slug: 'the-next-generation-of-filmmakers', title: 'The next generation of filmmakers', category: 'Conversations', image: conversation, alt: 'Creative perspectives from the world of filmmaking', intro: 'On finding your voice, building a creative community and making the films only you can make.', sections: [
    ['Begin with what you notice', 'A cinematic voice develops through attention. Which faces, spaces and questions keep returning to you? Looking closely at your own surroundings can be a more fertile starting point than trying to anticipate what an audience might expect.'],
    ['Find your collaborators', 'Film is a collective practice. Sharing work with people who can disagree thoughtfully helps an idea become stronger. A small team built on trust can make room for experiments, mistakes and unexpected solutions.'],
    ['Keep making, keep looking', 'A short scene, a sound study or a portrait of a place can teach something a plan alone cannot. Each finished piece offers a chance to reflect: what felt alive, what felt borrowed and what would you try differently next time?']
  ], quote: 'Your perspective is where your cinema begins.' },
  { slug: 'the-art-of-looking-closer', title: 'The art of looking closer', category: 'The Craft', image: masaan, alt: 'A moment from the visual world of Masaan', intro: 'How framing, light and the spaces between words shape the emotional language of cinema.', sections: [
    ['Choosing what the audience sees', 'Every frame is a choice about attention. Distance can suggest isolation; a close-up can make the smallest hesitation visible. The question is not simply whether an image is beautiful, but what it lets us understand about the person inside it.'],
    ['Light as a part of the story', 'A window, a streetlamp or the last light of the day can shape a scene’s atmosphere. Thinking about where light comes from helps an image feel connected to its world. Its colour and direction can support emotion without announcing it.'],
    ['Letting a moment breathe', 'Camera movement and stillness both have a rhythm. Holding a shot can invite an audience to search the frame and notice something for themselves. Sometimes a scene becomes more powerful when the image gives a performance room.']
  ], quote: 'A frame is a way of paying attention.' },
  { slug: 'behind-the-scenes', title: 'The quiet work behind every frame', category: 'Studio Notes', image: crew, alt: 'The collaborative process of film production', intro: 'A celebration of the preparation, patience and collaboration that bring a film set to life.', sections: [
    ['Preparation creates possibility', 'A shoot brings creative decisions and practical realities together. Rehearsals, location visits and conversations across departments create a shared understanding before the camera arrives. That preparation makes space for discoveries on the day.'],
    ['Many disciplines, one scene', 'Costume, production design, sound and cinematography all tell parts of the same story. A worn sleeve or a sound from the next room can make a place feel inhabited. The strongest details support the scene without competing for attention.'],
    ['Care is part of the craft', 'Clear communication and respect for people’s time shape the working environment. When collaborators feel heard, they can contribute more confidently. The atmosphere behind the camera becomes part of what is possible in front of it.']
  ], quote: 'Every frame holds the work of people you never see.' },
  { slug: 'listening-to-the-silence', title: 'Listening to the silence', category: 'The Craft', image: siya, alt: 'A film still from Siya', intro: 'Beyond dialogue and music: discovering how sound and silence give a scene its inner life.', sections: [
    ['The world outside the frame', 'Sound can extend a scene beyond its visible edges. Distant traffic, a ceiling fan or footsteps in a corridor tell us something about a space before the camera reveals it. These layers make the screen feel like a window into a larger world.'],
    ['Silence has texture', 'A quiet scene is rarely empty. Breath, clothing and the small sounds of a room can draw attention to a character’s state of mind. Reducing the surrounding noise can make an ordinary movement feel unexpectedly intimate.'],
    ['Knowing when to hold back', 'Music can guide feeling, but a scene may also need the freedom to remain unresolved. Listening to a sequence without its score is a useful way to understand what the performance and natural sound already communicate.']
  ], quote: 'Sometimes the most revealing part of a scene is what remains unsaid.' }
];

export const postUrl = (post) => `/blog/${post.slug}`;
