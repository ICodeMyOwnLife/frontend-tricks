import React from 'react';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `What is a Single Page Application?`,
    answer: (
      <div>
        <p>
          A <b>single-page application (SPA)</b> is a web application or web
          site that interacts with the user by dynamically rewriting the current
          page rather than loading entire new pages from a server.
        </p>
        <p>
          <b>Examples:</b> Gmail, Google Maps, Facebook or GitHub
        </p>
        <p>
          <b>Frameworks:</b> Angular, Ember.js, ExtJS, Meteor.js, Knockout.js,
          React, Vue.js
        </p>
        <p>
          <b>Technologies used:</b>
        </p>
        <ul>
          <li>
            <b>Location hash</b> or <b>HTML5 History API</b> is used to provide
            the perception and navigability of separate logical pages in the
            application.
          </li>
          <li>
            <b>Ajax</b>, <b>WebSockets</b> or <b>Server-send events (SSEs)</b>{' '}
            is used to communicate with servers.
          </li>
        </ul>
        <p>
          <b>Props:</b>
        </p>
        <ul>
          <li>
            <b>SPA is fast</b>: Most resources (HTML + CSS + JS) are only loaded
            once, only data is transmitted back and forth.
          </li>
          <li>
            <b>The development is sComponentified and streamlined</b>: The
            client and server are totally independent of one another. The same
            backend code can be reused for web application or mobile application
            or any of other client applications.
          </li>
          <li>SPAs are easy to debug with Chrome</li>
          <li>
            <b>SPAs can cached any local storage effectively</b>: An app can
            send only one request, store all data, then it can use this data and
            works event offline.
          </li>
          <li>SPAs are very easy to deploy.</li>
        </ul>
        <p>
          <b>Cons:</b>
        </p>
        <ul>
          <li>
            <b>Search engine optimization (SEO)</b>: Since there is no HTML
            markup except the initial <code>index.html</code>, search engines
            cannot index the content because their crawlers cannot execute the
            JavaScript used to generate the HTML. However, Google has stated
            that their search engine is now able to crawl Ajax call.
          </li>
          <li>
            SPAs have a slower first page load than server-based applications
            because heavy client frameworks are required to be loaded to the
            client.
          </li>
          <li>It is required JavaScript to be present and enabled.</li>
          <li>
            <b>SPAs are less secure</b>: Due to cross-site scripting (XSS), it
            enables attackers to inject client-side scripts into web application
            by other users.
          </li>
          <li>
            <b>Analytics</b>: Analytics tools such as Google Analytics rely
            heavily upon entire new pages loading in the browser, initiated by a
            new page load. SPAs do not work this way.
          </li>
        </ul>
        <p>
          <b>When should we consider using a SPA?</b>
        </p>
        <ol>
          <li>
            There is a rich interaction between the user and our application.
          </li>
          <li>If we want to provide real-time updates on the page.</li>
        </ol>
        <p>
          <b>Examples:</b> SaaS platforms, social networks and closed
          communities.
        </p>
        <p>
          <b>When should we avoid using a SPA?</b>
        </p>
        <ol>
          <li>The content is purely static.</li>
          <li>
            We need to provide accessibility for users with older browsers or
            slower internet connections.
          </li>
        </ol>
      </div>
    ),
    references: [
      {
        name: `[Medium] Single-page application vs. multiple-page application`,
        url: `https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58`,
      },
      {
        name: `[Wikipedia] Single-page application`,
        url: `https://en.m.wikipedia.org/wiki/Single-page_application`,
      },
      {
        name: `What Is a Single-Page Application?`,
        url: `https://dzone.com/articles/what-is-a-single-page-application`,
      },
      {
        name: `How Single Page Web Applications Actually Work`,
        url: `https://dzone.com/articles/how-single-page-web-applications-actually-work`,
      },
    ],
  },
  {
    question: `What is a Multiple-Page Application?`,
    answer: (
      <div>
        <p>
          <b>Multi page applications</b> are the traditional web applications
          that reload the entire page and displays the new one when a user
          interacts with the web app.
        </p>
        <p>
          <b>Pros:</b>
        </p>
        <ul>
          <li>Performs well on the search engine</li>
          <li>Provides a visual map of the web app to the user</li>
          <li>
            Provides lots of analytics with valuable information on how a
            website is performing: which features are working an which are not.
          </li>
        </ul>
        <p>
          <b>Cons:</b>
        </p>
        <ul>
          <li>Slow speed and performance</li>
          <li>Comparatively complex development</li>
          <li>Coupled backend and frontend</li>
        </ul>
      </div>
    ),
    references: [
      {
        name: `[Medium] Single Page Applications vs Multiple Page Applications — Do You Really Need an SPA?`,
        url: `https://medium.com/@goldybenedict/single-page-applications-vs-multiple-page-applications-do-you-really-need-an-spa-cf60825232a3`,
      },
      {
        name: `[Medium] Single-page application vs. multiple-page application`,
        url: `https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58`,
      },
      {
        name: `What’s the Difference Between Single-Page and Multi-Page Apps`,
        url: `https://rubygarage.org/blog/single-page-app-vs-multi-page-app`,
      },
    ],
  },
];

export default questions;
