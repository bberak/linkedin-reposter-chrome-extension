// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";

chrome.runtime.onInstalled.addListener(function () {
	chrome.storage.sync.set({ color: "#3aa757" }, function () {
		console.log("The color is green.");
	});
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: { schemes: ["http", "https"] },
					}),
				],
				actions: [new chrome.declarativeContent.ShowPageAction()],
			},
		]);
	});
});

const quotes = 
`
“Dogs have Owners, Cats have Staff.”
“I do not fear computers. I fear lack of them.” – Isaac Asimov
“A computer once beat me at chess, but it was no match for me at kick boxing.” – Emo Philips
“Computer Science is no more about computers than astronomy is about telescopes.” – Edsger W. Dijkstra
“The computer was born to solve problems that did not exist before.” – Bill Gates
“Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.”   – Norman Augustine
“Software is a gas; it expands to fill its container.” – Nathan Myhrvold
“All parts should go together without forcing.  You must remember that the parts you are reassembling were disassembled by you.  Therefore, if you can’t get them together again, there must be a reason.  By all means, do not use a hammer.”    – IBM Manual, 1925
“Standards are always out of date.  That’s what makes them standards.” – Alan Bennett
“Physics is the universe’s operating system.”  – Steven R Garman
“It’s hardware that makes a machine fast.  It’s software that makes a fast machine slow.” – Craig Bruce
“Imagination is more important than knowledge.  For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.”    – Albert Einstein
“The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.” – Stephen Hawking
“The more you know, the more you realize you know nothing.” – Socrates
“Tell me and I forget.  Teach me and I remember.  Involve me and I learn.” – Benjamin Franklin
“Real knowledge is to know the extent of one’s ignorance.” – Confucius
“If people never did silly things, nothing intelligent would ever get done.” – Ludwig Wittgenstein
“Getting information off the Internet is like taking a drink from a fire hydrant.”– Mitchell Kapor
“If you think your users are idiots, only idiots will use it.”– Linus Torvalds
“From a programmer’s point of view, the user is a peripheral that types when you issue a read request.” – P. Williams
“Where is the ‘any’ key?” – Homer Simpson, in response to the message, “Press any key”
“Computers are good at following instructions, but not at reading your mind.” – Donald Knuth
“There is only one problem with common sense; it’s not very common.” – Milt Bryce
“Your most unhappy customers are your greatest source of learning.” – Bill Gates
“Let us change our traditional attitude to the construction of programs: Instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaining to human beings what we want a computer to do.”    – Donald E. Knuth
“The Internet?  We are not interested in it.” – Bill Gates, 1993
“The best way to get accurate information on Usenet is to post something wrong and wait for corrections.” – Matthew Austern
“The most likely way for the world to be destroyed, most experts agree, is by accident.  That’s where we come in; we’re computer professionals.  We cause accidents.”   – Nathaniel Borenstein
“Pessimists, we’re told, look at a glass containing 50% air and 50% water and see it as half empty.  Optimists, in contrast, see it as half full.  Engineers, of course, understand the glass is twice as big as it needs to be.”– Bob Lewis
“In a room full of top software designers, if two agree on the same thing, that’s a majority.” – Bill Curtis
“It should be noted that no ethically-trained software engineer would ever consent to write a DestroyBaghdad procedure.  Basic professional ethics would instead require him to write a DestroyCity procedure, to which Baghdad could be given as a parameter.”    – Nathaniel S. Borenstein
“Mostly, when you see programmers, they aren’t doing anything.  One of the attractive things about programmers is that you cannot tell whether or not they are working simply by looking at them.  Very often they’re sitting there seemingly drinking coffee and gossiping, or just staring into space.  What the programmer is trying to do is get a handle on all the individual and unrelated ideas that are scampering around in his head.”    – Charles M. Strauss
“If you think you are worth what you know, you are very wrong.  Your knowledge today does not have much value beyond a couple of years.  Your value is what you can learn and how easily you can adapt to the changes this profession brings so often.”    – Jose M. Aguilar
“Programs must be written for people to read, and only incidentally for machines to execute.”– Abelson and Sussman
“Commenting your code is like cleaning your bathroom : you never want to do it, but it really does create a more pleasant experience for you and your guests.”    – Ryan Campbell
“We have to stop optimizing for programmers and start optimizing for users.” – Jeff Atwood
“Low-level programming is good for the programmer’s soul.”– John Carmack
“It’s OK to figure out murder mysteries, but you shouldn’t need to figure out code.  You should be able to read it.”    – Steve McConnell
“If we wish to count lines of code, we should not regard them as ‘lines produced’ but as ‘lines spent.’”– Edsger Dijkstra
“Programming can be fun, so can cryptography; however they should not be combined.”– Kreitzberg and Shneiderman
“Before software should be reusable, it should be usable.”– Ralph Johnson
“If you automate a mess, you get an automated mess.”– Rod Michael
“Looking at code you wrote more than two weeks ago is like looking at code you are seeing for the first time.”– Dan Hurvitz
“It is easier to change the specification to fit the program than vice versa.”– Alan Perlis
“Less than 10% of the code has to do with the ostensible purpose of the system; the rest deals with input-output, data validation, data structure maintenance, and other housekeeping.”– Mary Shaw
“If you have a procedure with ten parameters, you probably missed some.”– Alan Perlis
“How rare it is that maintaining someone else’s code is akin to entering a beautifully designed building, which you admire as you walk around and plan how to add a wing or do some redecorating. More often, maintaining someone else’s code is like being thrown headlong into a big pile of slimy, smelly garbage.”– Bill Venners
“Code generation, like drinking alcohol, is good in moderation.”– Alex Lowe
“Simplicity, carried to the extreme, becomes elegance.”– Jon Franklin
“A program is never less than 90% complete, and never more than 95% complete.”– Terry Baker
“When you are stuck in a traffic jam with a Porsche, all you do is burn more gas in idle.  Scalability is about building wider roads, not about building faster cars.”– Steve Swartz
“Everyone by now presumably knows about the danger of premature optimization.  I think we should be just as worried about premature design — designing too early what a program should do.”– Paul Graham
“Programming without an overall architecture or design in mind is like exploring a cave with only a flashlight: You don’t know where you’ve been, you don’t know where you’re going, and you don’t know quite where you are.”– Danny Thorpe
“The best way to predict the future is to implement it.”– David Heinemeier Hansson
“We need above all to know about changes; no one wants or needs to be reminded 16 hours a day that his shoes are on.”– David Hubel
“On two occasions I have been asked, ‘If you put into the machine wrong figures, will the right answers come out?’  I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.”– Charles Babbage
“Make everything as simple as possible, but not simpler.”– Albert Einstein
“Today, most software exists, not to solve a problem, but to interface with other software.”– IO Angell
“Good specifications will always improve programmer productivity far better than any programming tool or technique.”– Milt Bryce
“The difference between theory and practice is that in theory, there is no difference between theory and practice.”– Richard Moore
“Don’t document the problem, fix it.”– Atli Björgvin Oddsson
“As a rule, software systems do not work well until they have been used, and have failed repeatedly, in real applications.”– Dave Parnas
“If the code and the comments do not match, possibly both are incorrect.”– Norm Schryer
“I think it’s a new feature.  Don’t tell anyone it was an accident.”– Larry Wall
“If you don’t handle [exceptions], we shut your application down.  That dramatically increases the reliability of the system.”– Anders Hejlsberg
“When debugging, novices insert corrective code; experts remove defective code.”– Richard Pattis
“In a software project team of 10, there are probably 3 people who produce enough defects to make them net negative producers.”– Gordon Schulmeyer
“I think it is inevitable that people program poorly.  Training will not substantially help matters.  We have to learn to live with it.”– Alan Perlis
“Program testing can be a very effective way to show the presence of bugs, but is hopelessly inadequate for showing their absence.”– Edsger Dijkstra
“Manually managing blocks of memory in C is like juggling bars of soap in a prison shower: It’s all fun and games until you forget about one of them.”– anonymous Usenet user
“There’s no obfuscated Perl contest because it’s pointless.”– Jeff Polk
“Java is the most distressing thing to hit computing since MS-DOS.”– Alan Kay
“There are only two things wrong with C++:  The initial concept and the implementation.”– Bertrand Meyer
“It was a joke, okay?  If we thought it would actually be used, we wouldn’t have written it!”– Mark Andreesen, speaking of the HTML tag BLINK
“Web Services are like teenage sex.  Everyone is talking about doing it, and those who are actually doing it are doing it badly.”– Michelle Bustamante
“Perl: The only language that looks the same before and after RSA encryption.”– Keith Bostic
“I didn’t work hard to make Ruby perfect for everyone, because you feel differently from me.  No language can be perfect for everyone.  I tried to make Ruby perfect for me, but maybe it’s not perfect for you.  The perfect language for Guido van Rossum is probably Python.”– Yukihiro Matsumoto, aka “Matz”, creator of Ruby
“XML is not a language in the sense of a programming language any more than sketches on a napkin are a language.” – Charles Simonyi
“BASIC is to computer programming as QWERTY is to typing.”– Seymour Papert
“It has been discovered that C++ provides a remarkable facility for concealing the trivial details of a program — such as where its bugs are.”– David Keppel
“UNIX is simple.  It just takes a genius to understand its simplicity.”– Dennis Ritchie
“Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’  Now they have two problems.”– Jamie Zawinski
“I think computer viruses should count as life.  I think it says something about human nature that the only form of life we have created so far is purely destructive.  We’ve created life in our own image.”– Stephen Hawking
“The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards.”– Gene Spafford
“Being able to break security doesn’t make you a hacker anymore than being able to hotwire cars makes you an automotive engineer.”– Eric Raymond
“Companies spend millions of dollars on firewalls, encryption and secure access devices, and it’s money wasted, because none of these measures address the weakest link in the security chain.”– Kevin Mitnick
“If you think technology can solve your security problems, then you don’t understand the problems and you don’t understand the technology.”– Bruce Schneier
“Hoaxes use weaknesses in human behavior to ensure they are replicated and distributed.  In other words, hoaxes prey on the Human Operating System.”– Stewart Kirkpatrick
“Passwords are like underwear: you don’t let people see it, you should change it very often, and you shouldn’t share it with strangers.”– Chris Pirillo
“I am not out to destroy Microsoft, that would be a completely unintended side effect.”– Linus Torvalds
“Yes, we have a dress code. You have to dress.”– Scott McNealy, co-founder of Sun Microsystems
“In an information economy, the most valuable company assets drive themselves home every night.  If they are not treated well, they do not return the next morning.”– Peter Chang
“It’s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive.”– Steve McConnell
“I’m not one of those who think Bill Gates is the devil.  I simply suspect that if Microsoft ever met up with the devil, it wouldn’t need an interpreter.”– Nicholas Petreley
“Two years from now, spam will be solved.”– Bill Gates, 2004
“The problem of viruses is temporary and will be solved in two years.”– John McAfee, 1988
“Computer viruses are an urban legend.”– Peter Norton, 1988
“In 2031, lawyers will be commonly a part of most development teams.”– Grady Booch
“I don’t know what the language of the year 2000 will look like, but I know it will be called Fortran.”– CA Hoare, 1982
“In the future, computers may weigh no more than 1.5 tonnes.”– Popular mechanics, 1949
“I see little commercial potential for the Internet for at least ten years.”– Bill Gates, 1994
“Before man reaches the moon, mail will be delivered within hours from New York to California, to Britain, to India or Australia.”– Arthur Summerfield, 1959, United States Post
“The best way to predict the future is to implement it.” That is the spirit that has made computers and the internet what it is today.
“Computers are good at following instructions, but not at reading your mind.”"Hoaxes use weaknesses in human behavior to ensure they are replicated and distributed. In other words, hoaxes prey on the Human Operating System.”
“in a room where people think similar – not much thinking is done…” =))
“It’s hardware that makes a machine fast. It’s software that makes a fast machine slow.”– Craig Bruce
“Computers are useless.  They can only give you answers.”(Pablo Picasso)
“Computers are like bikinis. They save people a lot of guesswork.”(Sam Ewing)
“They have computers, and they may have other weapons of mass destruction.”(Janet Reno)
“That’s what’s cool about working with computers.  They don’t argue, they remember everything, and they don’t drink all your beer.”(Paul Leary)
“If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside.”(Robert X. Cringely)
“Computers are getting smarter all the time.  Scientists tell us that soon they will be able to talk to us.  (And by ‘they’, I mean ‘computers’.  I doubt scientists will ever be able to talk to us.)”(Dave Barry)
“I’ve noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture.  Near as I can tell, this coincides with the release of MS-DOS.”(Larry DeLuca)
“The question of whether computers can think is like the question of whether submarines can swim.”(Edsger W. Dijkstra)
“It’s ridiculous to live 100 years and only be able to remember 30 million bytes.  You know, less than a compact disc.  The human condition is really becoming more obsolete every minute.”(Marvin Minsky)
“The city’s central computer told you?  R2D2, you know better than to trust a strange computer!”(C3PO)
“Never trust a computer you can’t throw out a window.”(Steve Wozniak)
“Hardware: The parts of a computer system that can be kicked.”(Jeff Pesis) 
“Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.”(Alan Kay)
“I’ve finally learned what ‘upward compatible’ means.  It means we get to keep all our old mistakes.”(Dennie van Tassel)
“There are two major products that come out of Berkeley: LSD and UNIX.  We don’t believe this to be a coincidence.”(Jeremy S. Anderson)
“19 Jan 2038 at 3:14:07 AM”(End of the word according to Unix–2^32 seconds after January 1, 1970)
“Every operating system out there is about equal… We all suck.”(Microsoft senior vice president Brian Valentine describing the state of the art in OS security, 2003)
“Microsoft has a new version out, Windows XP, which according to everybody is the ‘most reliable Windows ever.‘  To me, this is like saying that asparagus is ‘the most articulate vegetable ever.‘ “(Dave Barry)
“The Internet?  Is that thing still around?”  (Homer Simpson)
“The Web is like a dominatrix.  Everywhere I turn, I see little buttons ordering me to Submit.”(Nytwind)
“Come to think of it, there are already a million monkeys on a million typewriters, and Usenet is nothing like Shakespeare.”(Blair Houghton)
“The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry.”(Henry Petroski)
“True innovation often comes from the small startup who is lean enough to launch a market but lacks the heft to own it.”(Timm Martin)
“It has been said that the great scientific disciplines are examples of giants standing on the shoulders of other giants.  It has also been said that the software industry is an example of midgets standing on the toes of other midgets.”(Alan Cooper)
“It is not about bits, bytes and protocols, but profits, losses and margins.”(Lou Gerstner) 
“We are Microsoft.  Resistance Is Futile.  You Will Be Assimilated.”(Bumper sticker)
“No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.”(Mark Gibbs)
“The bulk of all patents are crap.  Spending time reading them is stupid.  It’s up to the patent owner to do so, and to enforce them.”Linus Torvalds)
“Controlling complexity is the essence of computer programming.”(Brian Kernigan) 
“Complexity kills.  It sucks the life out of developers, it makes products difficult to plan, build and test, it introduces security challenges, and it causes end-user and administrator frustration.”(Ray Ozzie) 
“There are two ways of constructing a software design.  One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.”(C.A.R. Hoare)
“The function of good software is to make the complex appear to be simple.”(Grady Booch)
“Just remember: you’re not a ‘dummy,’ no matter what those computer books claim.  The real dummies are the people who–though technically expert–couldn’t design hardware and software that’s usable by normal consumers if their lives depended upon it.”(Walter Mossberg)
“Software suppliers are trying to make their software packages more ‘user-friendly’…  Their best approach so far has been to take all the old brochures and stamp the words ‘user-friendly’ on the cover.”(Bill Gates)
“There’s an old story about the person who wished his computer were as easy to use as his telephone.  That wish has come true, since I no longer know how to use my telephone.”(Bjarne Stroustrup) 
“Any fool can use a computer.  Many do.”(Ted Nelson)
“There are only two industries that refer to their customers as ‘users’.”(Edward Tufte)
“Programmers are in a race with the Universe to create bigger and better idiot-proof programs, while the Universe is trying to create bigger and better idiots.  So far the Universe is winning.”(Rich Cook)
“Most of you are familiar with the virtues of a programmer.  There are three, of course: laziness, impatience, and hubris.”(Larry Wall)
“The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.”(Seymour Cray) 
“That’s the thing about people who think they hate computers.  What they really hate is lousy programmers.”(Larry Niven) 
“For a long time it puzzled me how something so expensive, so leading edge, could be so useless.  And then it occurred to me that a computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things.  They are, in short, a perfect match.”(Bill Bryson)
“Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.”(Eric Raymond) 
“A programmer is a person who passes as an exacting expert on the basis of being able to turn out, after innumerable punching, an infinite series of incomprehensive answers calculated with micrometric precisions from vague assumptions based on debatable figures taken from inconclusive documents and carried out on instruments of problematical accuracy by persons of dubious reliability and questionable mentality for the avowed purpose of annoying and confounding a hopelessly defenseless department that was unfortunate enough to ask for the information in the first place.”(IEEE Grid newsmagazine) 
“A hacker on a roll may be able to produce–in a period of a few months–something that a small development group (say, 7-8 people) would have a hard time getting together over a year.  IBM used to report that certain programmers might be as much as 100 times as productive as other workers, or more.”(Peter Seebach) 
“The best programmers are not marginally better than merely good ones.  They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.”(Randall E. Stross)
“A great lathe operator commands several times the wage of an average lathe operator, but a great writer of software code is worth 10,000 times the price of an average software writer.”(Bill Gates)
“Don’t worry if it doesn’t work right.  If everything did, you’d be out of a job.”(Mosher’s Law of Software Engineering)
“Measuring programming progress by lines of code is like measuring aircraft building progress by weight.”(Bill Gates)
“Writing code has a place in the human hierarchy worth somewhere above grave robbing and beneath managing.”(Gerald Weinberg) 
“First learn computer science and all the theory.  Next develop a programming style.  Then forget all that and just hack.”(George Carrette)
“First, solve the problem. Then, write the code.”(John Johnson)
“Optimism is an occupational hazard of programming; feedback is the treatment.”(Kent Beck)
“To iterate is human, to recurse divine.”(L. Peter Deutsch)
“The best thing about a boolean is even if you are wrong, you are only off by a bit.”(Anonymous)
“Should array indices start at 0 or 1?  My compromise of 0.5 was rejected without, I thought, proper consideration.”(Stan Kelly-Bootle)
“There are only two kinds of programming languages: those people always bitch about and those nobody uses.”(Bjarne Stroustrup) 
“PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil perpetrated by skilled but perverted professionals.”(Jon Ribbens)
“The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense.”(E.W. Dijkstra)
“It is practically impossible to teach good programming style to students that have had prior exposure to BASIC.  As potential programmers, they are mentally mutilated beyond hope of regeneration.”(E. W. Dijkstra)
“I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.”(Oktal)    
“There is no programming language–no matter how structured–that will prevent programmers from making bad programs.”(Larry Flon)
“Computer language design is just like a stroll in the park.  Jurassic Park, that is.”(Larry Wall)
“Fifty years of programming language research, and we end up with C++?”(Richard A. O’Keefe)
“Writing in C or C++ is like running a chain saw with all the safety guards removed.”(Bob Gray)   
“In C++ it’s harder to shoot yourself in the foot, but when you do, you blow off your whole leg.”(Bjarne Stroustrup)   
“C++ : Where friends have access to your private members.”(Gavin Russell Baker)       
“One of the main causes of the fall of the Roman Empire was that–lacking zero–they had no way to indicate successful termination of their C programs.”(Robert Firth)
“Java is, in many ways, C++–.”(Michael Feldman)
“Saying that Java is nice because it works on all OSes is like saying that anal sex is nice because it works on all genders.”(Alanna)
“Fine, Java MIGHT be a good example of what a programming language should be like.  But Java applications are good examples of what applications SHOULDN’T be like.”(pixadel)
“If Java had true garbage collection, most programs would delete themselves upon execution.”(Robert Sewell)
“Software is like sex: It’s better when it’s free.”(Linus Torvalds)
“The only people who have anything to fear from free software are those whose products are worth even less.”(David Emery)
“Good code is its own best documentation.”(Steve McConnell)
“Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.”(Eagleson’s Law)      
“The first 90% of the code accounts for the first 90% of the development time.  The remaining 10% of the code accounts for the other 90% of the development time.”(Tom Cargill)
“Good programmers use their brains, but good guidelines save us having to think out every case.”(Francis Glassborow)
“In software, we rarely have meaningful requirements.  Even if we do, the only measure of success that matters is whether our solution solves the customer’s shifting idea of what their problem is.”(Jeff Atwood)
“Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline.”(Bill Clinton)
“You can’t have great software without a great team, and most software teams behave like dysfunctional families.”(Jim McCarthy)
“As soon as we started programming, we found to our surprise that it wasn’t as easy to get programs right as we had thought.  Debugging had to be discovered.  I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.”(Maurice Wilkes discovers debugging, 1949) 
“Debugging is twice as hard as writing the code in the first place.  Therefore, if you write the code as cleverly as possible, you are–by definition–not smart enough to debug it.”(Brian Kernighan)
“If debugging is the process of removing bugs, then programming must be the process of putting them in.”(Edsger W. Dijkstra)
“I don’t care if it works on your machine!  We are not shipping your machine!”(Vidiu Platon)
“Programming is like sex: one mistake and you’re providing support for a lifetime.”(Michael Sinz)
“There are two ways to write error-free programs; only the third one works.”(Alan J. Perlis)
“You can either have software quality or you can have pointer arithmetic, but you cannot have both at the same time.”(Bertrand Meyer) 
“If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, ‘We’re sorry, here’s a coupon for two more.’ “(Mark Minasi) 
“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.”(Martin Golding)
“To err is human, but to really foul things up you need a computer.”(Paul Ehrlich) 
“A computer lets you make more mistakes faster than any invention in human history–with the possible exceptions of handguns and tequila.”(Mitch Radcliffe) 
“Everything that can be invented has been invented.” (Charles H. Duell, Commissioner, U.S. Office of Patents, 1899) 
“I think there’s a world market for about 5 computers.” (Thomas J. Watson, Chairman of the Board, IBM, circa 1948)
“It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years.”     (John Von Neumann, circa 1949)
“But what is it good for?” (Engineer at the Advanced Computing Systems Division of IBM, commenting on the microchip, 1968)
“There is no reason for any individual to have a computer in his home.” (Ken Olson, President, Digital Equipment Corporation, 1977)
“640K ought to be enough for anybody.” (Bill Gates, 1981)
“Windows NT addresses 2 Gigabytes of RAM, which is more than any application will ever need.” (Microsoft, on the development of Windows NT, 1992)
“We will never become a truly paper-less society until the Palm Pilot folks come out with WipeMe 1.0.”    (Andy Pierson) 
“If it keeps up, man will atrophy all his limbs but the push-button finger.”(Frank Lloyd Wright) 
There are so many men who can figure costs, and so few who can measure values.  ~Author Unknown
A corporation is a living organism; it has to continue to shed its skin.  Methods have to change.  Focus has to change.  Values have to change.  The sum total of those changes is transformation.  ~Andrew Grove
The most dangerous kind of waste is the waste we do not recognize.  ~Shigeo Shingo
Your lean process should be a lean process.  ~Author Unknown
There is nothing so useless as doing efficiently that which should not be done at all.  ~Peter F. Drucker
Continuous improvement is not about the things you do well - that's work.  Continuous improvement is about removing the things that get in the way of your work.  The headaches, the things that slow you down, that’s what continuous improvement is all about.  ~Bruce Hamilton
If you need a new process and don't install it, you pay for it without getting it.  ~Ken Stork
Everything can be improved.  ~Clarence W. Barron
Willful waste brings woeful want.  ~Thomas Fuller
There are many experts on how things have been done up to now. If you think something could use a little improvement, you are the expert.  ~Robert Brault, www.robertbrault.com
Amateurs work until they get it right.  Professionals work until they can't get it wrong.  ~Author Unknown
It is not the employer who pays the wages.  He only handles the money.  It is the product that pays the wages.  ~Henry Ford, 1922, also sometimes quoted as "It is the customer that pays the wages"
Nature does constant value stream mapping - it's called evolution.  ~Carrie Latet
Don't waste time learning the "tricks of the trade."  Instead, learn the trade.  ~James Charlton
Time waste differs from material waste in that there can be no salvage.  The easiest of all wastes and the hardest to correct is the waste of time, because wasted time does not litter the floor like wasted material.  ~Henry Ford
Waste is a tax on the whole people.  ~Albert W. Atwood
When solving problems, dig at the roots instead of just hacking at the leaves.  ~Anthony J. D'Angelo, The College Blue Book
A bad system will beat a good person every time.  ~W. Edwards Deming
It is an immutable law in business that words are words, explanations are explanations, promises are promises but only performance is reality.  ~Harold Geneen
We are too busy mopping the floor to turn off the faucet.  ~Author Unknown
Watch the little things; a small leak will sink a great ship.  ~Benjamin Franklin
Waste is worse than loss.  The time is coming when every person who lays claim to ability will keep the question of waste before him constantly.  The scope of thrift is limitless.  ~Thomas A. Edison
It is more than probable that the average man could, with no injury to his health, increase his efficiency fifty percent.  ~Walter Scott
The essential question is not, "How busy are you?" but "What are you busy at?"  ~Oprah Winfrey
A relentless barrage of "why’s" is the best way to à your mind to pierce the clouded veil of thinking caused by the status quo.  Use it often.  ~Shigeo Shingo
The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency.  The second is that automation applied to an inefficient operation will magnify the inefficiency.  ~Bill Gates
The world we have created is a product of our thinking; it cannot be changed without changing our thinking.  ~Albert Einstein
If you don't know where you are going, you will probably end up somewhere else.  ~Lawrence J. Peter
Improvement usually means doing something that we have never done before.  ~Shigeo Shingo
Work expands so as to fill the time available for its completion.  ~C. Northcote Parkinson, 1958
On the bathing-tub of King T'ang the following words were engraved:  "If you would one day renovate yourself, do so from day to day.  Yea, let there be daily renovation."  ~Confucian Analects
An environment where people have to think brings with it wisdom, and this wisdom brings with it kaizen [continuous improvement].  ~Teruyuki Minoura
The impossible is often the untried.  ~Jim Goodwin
The man who will use his skill and constructive imagination to see how much he can give for a dollar, instead of how little he can give for a dollar, is bound to succeed.  ~Henry Ford
If you don't have time to do it right you must have time to do it over.  ~Author Unknown
Ford's success has startled the country, almost the world, financially, industrially, mechanically.  It exhibits in higher degree than most persons would have thought possible the seemingly contradictory requirements of true efficiency, which are:  constant increase of quality, great increase of pay to the workers, repeated reduction in cost to the consumer.  And with these appears, as at once cause and effect, an absolutely incredible enlargement of output reaching something like one hundredfold in less than ten years, and an enormous profit to the manufacturer.  ~Charles Buxton Going
Great ideas need landing gear as well as wings.  ~C.D. Jackson
Different isn't always better, but better is always different.  ~Author Unknown
He who rejects change is the architect of decay.  The only human institution which rejects progress is the cemetery.  ~Harold Wilson
Invest a few moments in thinking.  It will pay good interest.  ~Author Unknown
Don't water your weeds.  ~Harvey MacKay
You must have long-range goals to keep you from being frustrated by short-range failures.  ~Charles C. Noble
I don't like a man to be too efficient.  He's likely to be not human enough.  ~Felix Frankfurter
If all efficiency experts were laid end to end - I'd be in favor of it.  ~Al Diamond
One half of knowing what you want is knowing what you must give up before you get it.  ~Sidney Howard
I shall try to correct errors when shown to be errors, and I shall adopt new views so fast as they appear to be true views.  ~Abraham Lincoln
It is better to stir up a question without deciding it, than to decide it without stirring it up.  ~Joseph Joubert
"Quality is everyone's responsibility.” W. Edwards Deming 
“It is not enough to do your best; you must know what to do, and then do your best.” W. Edwards Deming
“Profit in business comes from repeat customers, customers that boast about your project or service, and that bring friends with them.” W. Edwards Deming
“If you can't describe what you are doing as a process, you don't know what you're doing.”W. Edwards Deming
"You can not inspect quality into the product; it is already there.” W. Edwards Deming
"It does not happen all at once. There is no instant pudding.” W. Edwards Deming
“If you stay in this world, you will never learn another one.” W. Edwards Deming
“Does experience help? NO! Not if we are doing the wrong things.” W. Edwards Deming 
“The result of long-term relationships is better and better quality, and lower and lower costs.”W. Edwards Deming
“We are here to make another world.” W. Edwards Deming
Don’t be afraid to make mistakes.” Sakichi Toyoda (Osono et al 2008, 67)
“If you’re 60 percent sure, take action.” (Osono et al 2008, 86)
"Before you say you can’t do something, try it.” Sakichi Toyoda (Osono et al 2008, 86)
“I have seen more failures than successes.” Sakichi Toyoda (Osono et al 2008, 87)
"Endure a hundred times, strengthen yourself a thousand times, and you will complete you tasks in short order.” A phrase that hung in Sakichi Toyoda’s home, quoted by Matsubara (Osono et al 2008, 127)
“To do what you believe is right, to do what you believe is good, and doing these things right then and in that way is a calling from on high.  Thus, do it boldly, do as you believe, do as you are.” Eiji Toyoda quoted by Matsubara (Osono et al 2008, 127)
“At Toyota, we expect every assembly line worker to direct their wisdom toward originating ideas for improving base costs, quality, and safety.  Here the job of the line manager is to create an environment in which line workers can easily make suggestions and are supported to implement those suggestions.” Matsubara (Osono et al 2008, 131)
“Each person thoroughly fulfilling their duties generates great power that, gathered together in a chain, creates a ring of power.” Kiichiro Toyoda (Osono et al 2008, 134)
“Since it’s the customer that pays our salary, our responsibility is to make the product they want, when they want it, and deliver quality that satisfies them.” Retired factory worker, Kiyoshi Tsutsumi (Osono et al 2008, 136)
“Unless we visit genba [the place where the action is], we cannot develop a good plan.” Katsuyoshi Tabata (Osono et al 2008, 141)
“In the [Toyota] vernacular these information processing skills are called, ‘not listening to what you are told,’” Funo of Toyota Motor Sales, U.S.A. (Osono et al 2008, 153)
“the head of an abundant rice plant hangs down” old Japanese Adage, describing the humility of senior executives of Toyota and the Toyoda family members (Osono et al 2008, 167)
“If your boss refuses you something that you really want to do, don’t give up,” he said, “try pitching it two or three times.  By the third time, the boss will realise, ‘Hey, this guy is serious.’” Toyota President Katsuaki Watanabe (Osono et al 2008, 182)
“We have to waste resources by trying many things when we are unsure of which are best.” Toyota Chairman Fujio Cho (Osono et al 2008, 207)
“There’s got to be a better way” Top Toyota Executives (Osono et al 2008, 15)
“Reform business when business is good.” Former Toyota Chairman and President Hiroshi Okuda (Osono et al 2008, 15)
No change is bad” Toyota President Katsuaki Watanabe (Osono et al 2008, 15)
“always optimizing” Toyota Value (Osono et al 2008, 45)
“Action at the Source” Suzuki (Osono et al 2008, 53)
“Let’s give it a try.” Sakichi Toyoda, President of Toyoda Automatic Loom Works (parent company to Toyota) (Osono et al 2008, 67)
“Don’t be afraid to make mistakes.” Sakichi Toyoda (Osono et al 2008, 67)
“Simplicity is the ultimate sophistication”- Leonardo da Vinci
”Simplicity does not precede complexity, but follows it” - Alan Perlis
”Productivity is being able to do things that you were never able to do before” - Franz Kafka
~ Innovation is the process of turning ideas into manufacturable and marketable form. ~Watts Humprey
~ Creativity is thinking up new things. Innovation is doing new things. ~Theodore Levitt
~ Never before in history has innovation offered promise of so much to so many in so short a time. ~Bill Gates
~ Great innovations should not be forced on slender majorities. ~Thomas Jefferson
~ Innovation by definition will not be accepted at first. It takes repeated attempts, endless demonstrations, monotonous rehearsals before innovation can be accepted and internalized by an organization. This requires 'courageous patience'. ~Warren Bennis
~ Fashion is something barbarous, for it produces innovation without reason and imitation without benefit. ~George Santayana
~ You have all the reason in the world to achieve your grandest dreams. Imagination plus innovation equals realization. ~Denis Waitley
~ Entrepreneurs innovate. Innovation is the specific instrument of entrepreneurship. It is the act that endows resources with a new capacity to create wealth. ~Peter F. Drucker
~ The world leaders in innovation and creativity will also be world leaders in everything else. ~ Harold R. McAlindon
~ Innovation is not the product of logical thought, although the result is tied to logical structure. ~ Albert Einstein
"On n'innove jamais seul dans son coin" Areva Innovation Motto
“Shoot for the moon. Even if you miss, you'll land among the stars.”
"L’innovation systématique requiert la volonté de considérer le changement comme une opportunité.rPeter Drucker
"Life would be so much easier if we only had the source code."
"Men are from Mars. Women are from Venus. Computers are from hell."
"Computer are like air conditioners: they stop working when you open windows."
"Like car accidents, most hardware problems are due to driver error."
"If you put fences around people, you get sheep. Give people the room they need." William L. McKnight, McKnight Foundation founder and former 3M CEO
"Be a yardstick of quality. Some people aren't used to an environment where excellence is expected." Steve Jobs 
"Design is not just what it looks like and feels like. Design is how it works."Steve Jobs 
"I want to put a ding in the universe. " Steve Jobs 
"Innovation distinguishes between a leader and a follower." Steve Jobs 
"Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations. " Steve Jobs 
"You can't just ask customers what they want and then try to give that to them. By the time you get it built, they'll want something new. " Steve Jobs 
"Stay Hungry. Stay Foolish." - Steve Jobs ( famous Standford speech )
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary." Steve Jobs
"On a toujours le choix. On est même la somme de ses choix.” Joseph O’Connor –
“Ceux qui ont des idées mais ne savent pas les présenter sont, peu à peu, exclus des débats.” Bernard Werber
"Le prix Nobel, c’est une bouée de sauvetage lancée à un nageur  qui a déjà atteint la rive." George Bernard Shaw –
"Soyez insatiables, soyez fous. C’est vrai que ça n’est pas dans le status quo qu’on se préparera un avenir meilleur. Ni la frilosité et les certitudes qui nous permettront d’avancer." Steve Jovs
"I didn't know it was impossible when I did it" - anomynous
"He who moves not forward, goes backward." Johann Wolfgang von Goethe 
"All that is human must retrograde if it does not advance."  Edward Gibbon 
"No snowflake in an avalanche ever feels responsible." Voltaire
"I try. I fail. I try again. I fail better." Samuel Beckett 
"Experience is not what happens to a man; it is what a man does with what happens to him." Aldous Huxley 
"Take care of the large problems and the small ones will tend not to bother you." anonymous
"Computers are useless. They can only give you answers." - Pablo Picasso 
"Nobody is perfect, but a team can be" - Meredith Belbin
"Necessity is the mother of invention" - Plato
"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning." - Albert Einstein
"We cannot solve our problems with the same thinking we used when we created them." Albert Einstein 
"If you can't explain it simply, you don't understand it well enough." Albert Einstein 
"Anyone who has never made a mistake has never tried anything new." Albert Einstein 
"The only source of knowledge is experience." Albert Einstein 
"Make everything as simple as possible, but not simpler." Albert Einstein 
"Information is not knowledge." Albert Einstein
"I have not failed. I've just found 10,000 ways that won't work." Thomas A. Edison 
"Genius is one percent inspiration and ninety-nine percent perspiration." Thomas A. Edison 
“Algorithmic complexity for structured programmers: All algorithms are O(f(n)), where f is someone else’s responsibility.” – Peter Cooper
“Fact: 48% of IE7 usage comes from developers checking that their site works in IE7.” – @iamdevloper
“Programmers don’t burn out on hard work, they burn out on change-with-the-wind directives and not ‘shipping’.” – Mark Berry
“I’ve known people who have not mastered their tools who are good programmers, but not a tool master who remained a mediocre programmer.” – Kent Beck
“There are two types of people in this world: those who understand recursion and those who don’t understand that there are two types of people in this world.”
“Daddy, how is software made?” “Well, when a programmer loves an idea very much they stay up all night and then push to github the next day.” – Sam Kottler 
“Software developers like to solve problems. If there are no problems handily available, they will create their own problems.”
“The problem with quick and dirty, is that the dirty remains long after the quick has been forgotten” – Steve C. McConnell
“Prolific developers don’t always write a lot of code, instead they solve a lot of problems. The two things are not the same.” – J. Chambers
“A programmer’s wife tells him: go to store. pick up a loaf of bread. If they have eggs, get a dozen. The programmer returns with 12 loaves.”
“Bad programmers have all the answers. Good testers have all the questions.” – Gil Zilberfeld
“Our job is to tell you your baby is ugly!” – Software Testers
“The best TDD can do, is assure that code does what the programmer thinks it should do. That is pretty good BTW.” – James Grenning
“The bitterness of poor quality remains long after the sweetness of meeting the schedule has been forgotten.” – Anonymous
“One bad programmer can easily create two new jobs a year.” – David Parnas
“Don’t document bad code — rewrite it.” – Kernighan and Plauger
“3 Errors walk into a bar. The barman says, “normally I’d Throw you all out, but tonight I’ll make an Exception.” – @iamdevloper
“Weeks of programming can save you hours of planning.” - Anonymous
“If you think it’s expensive to hire a professional, wait until you hire an amateur.”
“Programming can be fun, so can cryptography; however they should not be combined.” -Kreitzberg and Shneiderman
“The proper use of comments is to compensate for our failure to express ourself in code.” – Uncle Bob Martin
“My definition of an expert in any field is a person who knows enough about what’s really going on to be scared.” – P. J. Plauger
“First, solve the problem. Then, write the code.” – John Johnson
“Programming is not a zero-sum game. Teaching something to a fellow programmer doesn’t take it away from you.” – John Carmack
One of my most productive days was throwing away 1000 lines of code  — Ken Thompson
When in doubt, use brute force.    — Ken Thompson
Deleted code is debugged code.  — Jeff Sickel
Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. — Brian W. Kernighan and P. J. Plauger in The Elements of Programming Style.
The most effective debugging tool is still careful thought, coupled with judiciously placed print statements. — Brian W. Kernighan, in the paper Unix for Beginners (1979)
Controlling complexity is the essence of computer programming. — Brian Kernighan
Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defence against complexity.   — David Gelernter
UNIX was not designed to stop its users from doing stupid things, as that would also stop them from doing clever things.   — Doug Gwyn
Life is too short to run proprietary software. — Bdale Garbee
The central enemy of reliability is complexity.  — Geer et al.
Simplicity is prerequisite for reliability.   — Edsger W. Dijkstra
Simplicity is the ultimate sophistication.  — Leonardo da Vinci
The unavoidable price of reliability is simplicity.  — C.A.R. Hoare
You can’t trust code that you did not totally create yourself.   — Ken Thompson
Compatibility means deliberately repeating other people’s mistakes.  — David Wheeler
Debugging time increases as a square of the program’s size.   — Chris Wenham
Before software can be reusable it first has to be usable.
The best code is no code at all.
No code is faster than no code.  — merb motto
Program testing can be a very effective way to show the presence of bugs, but is hopelessly inadequate for showing their absence.  — Edsger W. Dijkstra
Parkinson’s Law  “Work expands so as to fill the time available for its completion.”
Code never lies, comments sometimes do. — Ron Jeffries
If we’d asked the customers what they wanted, they would have said “faster horses” — Henry Ford
With diligence it is possible to make anything run slowly.— Tom Duff
Software obeys the law of gaseous expansion – it continues to grow until memory is completely filled. — Larry Gleason
A distributed system is one in which the failure of a computer you didn’t even know existed can render your own computer unusable. — Leslie Lamport
The proper use of comments is to compensate for our failure to express ourself in code. — Robert C. MartinClean Code
Incorrect documentation is often worse than no documentation.   — Bertrand Meyer
Security is a state of mind.   — NSA Security Manua
And don’t EVER make the mistake that you can design something better than what you get from ruthless massively parallel trial-and-error with a feedback cycle. That’s giving your intelligence much too much credit    — Linus 
`.split("\n").filter(x => x);


console.log(quotes)

function postToLinkedIn() {
	//-- https://developer.chrome.com/extensions/cookies
	chrome.cookies.get(
		{ url: "https://www.linkedin.com", name: "JSESSIONID" },
		function (res) {
			const csrf = res.value.split('"').filter(Boolean).join('"');
			const quote = quotes[Math.floor(Math.random() * (quotes.length -1))]

			console.log(new Date(), "Posting..", quote);

			fetch(
				"https://www.linkedin.com/voyager/api/contentcreation/normShares",
				{
					headers: {
						accept: "application/vnd.linkedin.normalized+json+2.1",
						"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
						"content-type": "application/json; charset=UTF-8",
						"csrf-token": csrf,
						"sec-fetch-dest": "empty",
						"sec-fetch-mode": "cors",
						"sec-fetch-site": "same-origin",
						"x-li-lang": "en_US",
						//"x-li-page-instance": "urn:li:page:d_flagship3_feed;TcFFnWq8TAevvdnMrDshFQ==",
						"x-li-track":
							'{"clientVersion":"1.6.8301","osName":"web","timezoneOffset":0,"deviceFormFactor":"DESKTOP","mpName":"voyager-web","displayDensity":1,"displayWidth":1920,"displayHeight":1080}',
						"x-restli-protocol-version": "2.0.0",
					},
					referrer: "https://www.linkedin.com/feed/",
					referrerPolicy: "no-referrer-when-downgrade",
					body:
						`{"visibleToConnectionsOnly":false,"commentsDisabled":false,"externalAudienceProviders":[],"commentary":{"text":"${quote}","attributes":[]},"origin":"FEED","media":[]}`,
					method: "POST",
					mode: "cors",
					credentials: "include",
				}
			)
				.then((r) => {
					console.log(r);
					return r;
				})
				.then((r) => r.text())
				.then(console.log)
				.then(() =>
					setTimeout(
						postToLinkedIn,
						1000 * 60 * (60 + Math.random() * 20) //-- An hour and something minutes
					)
				);
		}
	);
}

postToLinkedIn();

