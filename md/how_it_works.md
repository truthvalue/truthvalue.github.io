### How it works

The Truth Value Project computes for each site a value of reputation that reflects how closely associated the site is with users that have been spreading fake news on social media.

The algorithm starts from a ground truth that we are striving to keep as small as possible.
On the positive side, we have a handful of sites that correspond to peer-reviewed scientific publications, and a few selected news agencies.
On the negative side, we have a handful of sites that, by the admission of the site operators, or by our assessment, specialize in spreading manufactured, fake news.
The reputation of all other news items is determined algorithmically, analyzing the correlation of who is spreading which news on social media.
User votes given via the app or via the bookmarklet are counted as endorsement for the news, and are subject to the same kind of analysis as acts of social sharing.

Our main source of social media information consists in Twitter and Facebook data.
Our data is constantly evolving, and consists of more than 3 million news items, and over 50 millions acts of social sharing of news.

In order to compute the reputation of news items, we are experimenting with a variety of algorithms, and we are frequently updating how the system works.
As of the beginning of November 2017, the algorithm we use is a variant of the "harmonic" algorithm described in [Some Like it Hoax: Automated Fake News Detection in Social Networks](https://arxiv.org/abs/1704.07506).
We have several alternative algorithms under evaluation.
Our goal is to publish the algorithms we use, as soon as we have a good characterization of how well they work.

We require users to log in in order to access the service in order to prevent abuse by automated bots.



