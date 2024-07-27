
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. – Robert Frost",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    "To be great is to be misunderstood. – Ralph Waldo Emerson",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. – William James",
    "The best revenge is massive success. – Frank Sinatra",
    "Do not go gentle into that good night. Rage, rage against the dying of the light. – Dylan Thomas",
    "The only impossible journey is the one you never begin. – Tony Robbins",
    "Life is either a daring adventure or nothing at all. – Helen Keller",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "It is our choices that show what we truly are, far more than our abilities. – J.K. Rowling",
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    "It does not do to dwell on dreams and forget to live. – J.K. Rowling",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "The best way to predict your future is to create it. – Peter Drucker",
    "The mind is everything. What you think you become. – Buddha",
    "Life isn't about finding yourself. Life is about creating yourself. – George Bernard Shaw",
    "If you tell the truth, you don't have to remember anything. – Mark Twain",
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    "The greatest wealth is to live content with little. – Plato",
    "Dream as if you’ll live forever. Live as if you’ll die today. – James Dean",
    "Everything has beauty, but not everyone can see. – Confucius",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "The harder I work, the luckier I get. – Samuel Goldwyn",
    "It always seems impossible until it's done. – Nelson Mandela",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Whether you think you can or you think you can’t, you’re right. – Henry Ford",
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    "Life isn’t about waiting for the storm to pass, it’s about learning how to dance in the rain. – Vivian Greene",
    "The best way out is always through. – Robert Frost",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Our greatest glory is not in never falling, but in rising every time we fall. – Confucius",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
    "What we achieve inwardly will change outer reality. – Plutarch"
];



function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}


document.getElementById('generateButton').addEventListener('click', function() {
    document.getElementById('quote').textContent = getRandomQuote();
});
