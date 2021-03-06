import React from "react";
import Navbar from "./Commons/Navbar/Navbar";

import Nodes from "./Pages/Editor/components/Nodes";
import Notecard from "./Pages/Editor/components/Notecard";

import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

import videotext from "./videovtt.vtt";
import ReactPlayer from "react-player";

const vttext = [
  { text: "[Music]", start: 2.029, duration: 3.08 },
  {
    text: "what do you remember about becoming a",
    start: 7.16,
    duration: 8.139,
  },
  { text: "teenager scary question maybe it was", start: 9.96, duration: 7.59 },
  {
    text: "waking up one morning to discover that",
    start: 15.299,
    duration: 3.691,
  },
  { text: "your body was shaped completely", start: 17.55, duration: 4.83 },
  {
    text: "differently or maybe you remember some",
    start: 18.99,
    duration: 5.459,
  },
  {
    text: "of the more questionable decisions that",
    start: 22.38,
    duration: 3.989,
  },
  {
    text: "you made like the perm that I got when I",
    start: 24.449,
    duration: 4.261,
  },
  {
    text: "was 13 I thought it would make me look",
    start: 26.369,
    duration: 3.691,
  },
  { text: "like drew Barrymore", start: 28.71, duration: 5.52 },
  {
    text: "made me look like a poodle or maybe you",
    start: 30.06,
    duration: 7.08,
  },
  { text: "remember becoming class clown or an", start: 34.23, duration: 7.29 },
  {
    text: "athlete or a loner or maybe you remember",
    start: 37.14,
    duration: 7.86,
  },
  { text: "getting sick I'm talking about the", start: 41.52, duration: 7.53 },
  {
    text: "sickness of despair emotional pain loss",
    start: 45.0,
    duration: 7.02,
  },
  {
    text: "of happiness and for some people wanting",
    start: 49.05,
    duration: 6.93,
  },
  {
    text: "to die we call this sickness depression",
    start: 52.02,
    duration: 8.219,
  },
  {
    text: "and it is both common and deadly one in",
    start: 55.98,
    duration: 6.21,
  },
  {
    text: "three people will experience clinical",
    start: 60.239,
    duration: 4.621,
  },
  {
    text: "depression in their lifetime and every",
    start: 62.19,
    duration: 5.16,
  },
  { text: "year two and three-quarter million", start: 64.86, duration: 4.95 },
  {
    text: "deaths can be attributed to depression",
    start: 67.35,
    duration: 6.269,
  },
  {
    text: "and related sicknesses but despite this",
    start: 69.81,
    duration: 6.48,
  },
  {
    text: "despite the high prevalence and deadly",
    start: 73.619,
    duration: 5.07,
  },
  {
    text: "cost of depression there remains so much",
    start: 76.29,
    duration: 4.079,
  },
  {
    text: "that we don't understand about this",
    start: 78.689,
    duration: 5.851,
  },
  {
    text: "sickness we have no objective diagnostic",
    start: 80.369,
    duration: 6.781,
  },
  {
    text: "test for depression no spinal tap or",
    start: 84.54,
    duration: 6.38,
  },
  {
    text: "x-ray and we have no way of forecasting",
    start: 87.15,
    duration: 7.469,
  },
  { text: "depression for a specific person no", start: 90.92, duration: 5.32 },
  {
    text: "genetic marker that can tell us about",
    start: 94.619,
    duration: 6.061,
  },
  {
    text: "your risk and so we're left with a lot",
    start: 96.24,
    duration: 7.29,
  },
  {
    text: "of questions what is depression where",
    start: 100.68,
    duration: 4.86,
  },
  {
    text: "does it come from why does it happen and",
    start: 103.53,
    duration: 5.629,
  },
  { text: "who is at the highest risk", start: 105.54, duration: 5.969 },
  { text: "answering these questions is the", start: 109.159, duration: 4.091 },
  {
    text: "cornerstone of my research work I'm a",
    start: 111.509,
    duration: 3.811,
  },
  {
    text: "clinical psychologist and neuroscientist",
    start: 113.25,
    duration: 4.74,
  },
  {
    text: "and director of a research laboratory",
    start: 115.32,
    duration: 4.799,
  },
  { text: "centered on mood disorders like", start: 117.99, duration: 6.21 },
  {
    text: "depression in my lab we believe that one",
    start: 120.119,
    duration: 6.721,
  },
  {
    text: "of the important keys for understanding",
    start: 124.2,
    duration: 4.919,
  },
  {
    text: "depression is to pay attention to when",
    start: 126.84,
    duration: 4.58,
  },
  { text: "depression tends to start", start: 129.119, duration: 5.151 },
  {
    text: "the teen years which also happened to be",
    start: 131.42,
    duration: 6.66,
  },
  {
    text: "a time of profound brain cognitive and",
    start: 134.27,
    duration: 6.93,
  },
  {
    text: "social development and that's what I'm",
    start: 138.08,
    duration: 6.15,
  },
  {
    text: "here to talk about today first what is",
    start: 141.2,
    duration: 5.1,
  },
  {
    text: "it about teen development that may make",
    start: 144.23,
    duration: 4.32,
  },
  {
    text: "young people especially vulnerable to",
    start: 146.3,
    duration: 6.3,
  },
  {
    text: "depression and second what can we do to",
    start: 148.55,
    duration: 7.11,
  },
  {
    text: "foster emotional health in teens and in",
    start: 152.6,
    duration: 6.15,
  },
  {
    text: "the rest of us but let me back up and",
    start: 155.66,
    duration: 5.0,
  },
  {
    text: "start by talking a little bit about",
    start: 158.75,
    duration: 5.88,
  },
  {
    text: "development adolescence is a kind of",
    start: 160.66,
    duration: 8.11,
  },
  {
    text: "developmental Bermuda Triangle I say",
    start: 164.63,
    duration: 5.96,
  },
  {
    text: "this because it's characterized by three",
    start: 168.77,
    duration: 5.16,
  },
  {
    text: "converging developmental events first",
    start: 170.59,
    duration: 7.149,
  },
  {
    text: "teen brains are changing don't get me",
    start: 173.93,
    duration: 5.67,
  },
  {
    text: "wrong neuro development is unfolding",
    start: 177.739,
    duration: 3.871,
  },
  {
    text: "throughout childhood but it's getting",
    start: 179.6,
    duration: 4.08,
  },
  { text: "into late childhood and early", start: 181.61, duration: 4.37 },
  {
    text: "adolescence that guess what happens",
    start: 183.68,
    duration: 5.64,
  },
  {
    text: "puberty which brings with it a cascade",
    start: 185.98,
    duration: 5.89,
  },
  {
    text: "of hormones that interact with changing",
    start: 189.32,
    duration: 4.44,
  },
  { text: "brain structure function and", start: 191.87, duration: 5.01 },
  {
    text: "communication here's a little bit of a",
    start: 193.76,
    duration: 5.039,
  },
  {
    text: "sidebar on the neuroscience of brain",
    start: 196.88,
    duration: 3.99,
  },
  { text: "communication in humans", start: 198.799, duration: 3.841 },
  { text: "one way that we measure brain", start: 200.87, duration: 4.29 },
  {
    text: "communication is by looking to see what",
    start: 202.64,
    duration: 4.98,
  },
  {
    text: "parts of the brain are active at the",
    start: 205.16,
    duration: 5.13,
  },
  {
    text: "same time you can think of this like",
    start: 207.62,
    duration: 4.92,
  },
  {
    text: "watching a Christmas tree to see which",
    start: 210.29,
    duration: 5.61,
  },
  {
    text: "lights blink on and off together and we",
    start: 212.54,
    duration: 5.85,
  },
  { text: "call this synchronized activation", start: 215.9, duration: 5.52 },
  {
    text: "functional connectivity and we interpret",
    start: 218.39,
    duration: 4.95,
  },
  {
    text: "it to mean that those parts of the brain",
    start: 221.42,
    duration: 3.92,
  },
  {
    text: "are talking to one another they are",
    start: 223.34,
    duration: 6.33,
  },
  { text: "functionally connected the spatial", start: 225.34, duration: 5.8 },
  { text: "pattern of functional connectivity", start: 229.67, duration: 4.14 },
  {
    text: "across the whole brain makes a kind of a",
    start: 231.14,
    duration: 6.03,
  },
  {
    text: "map sets of intersecting functional",
    start: 233.81,
    duration: 5.64,
  },
  {
    text: "networks that reflects how different",
    start: 237.17,
    duration: 3.9,
  },
  {
    text: "parts of the brain talk to one another",
    start: 239.45,
    duration: 5.31,
  },
  {
    text: "and here's the cool part moving from",
    start: 241.07,
    duration: 6.12,
  },
  {
    text: "childhood into the teen years and even",
    start: 244.76,
    duration: 5.15,
  },
  { text: "the early 20s we see a remarkable", start: 247.19, duration: 5.19 },
  { text: "reorganization of these functional", start: 249.91, duration: 6.04 },
  {
    text: "networks earlier in childhood networks",
    start: 252.38,
    duration: 6.479,
  },
  {
    text: "tend to be more strongly local that is",
    start: 255.95,
    duration: 5.069,
  },
  {
    text: "neighboring parts of the brain like to",
    start: 258.859,
    duration: 3.611,
  },
  { text: "talk to one another", start: 261.019, duration: 4.691 },
  {
    text: "but moving into the teen years and a bit",
    start: 262.47,
    duration: 6.0,
  },
  {
    text: "beyond larger functional networks become",
    start: 265.71,
    duration: 5.91,
  },
  {
    text: "more strongly synchronized and organized",
    start: 268.47,
    duration: 6.24,
  },
  {
    text: "around hub brain areas parts of the",
    start: 271.62,
    duration: 5.16,
  },
  {
    text: "network that talked to both close and",
    start: 274.71,
    duration: 5.82,
  },
  {
    text: "distant parts of the brain one way to",
    start: 276.78,
    duration: 5.4,
  },
  {
    text: "think about these functional networks is",
    start: 280.53,
    duration: 3.6,
  },
  { text: "to imagine that they are like the", start: 282.18, duration: 4.94 },
  {
    text: "pattern of flights between airports in",
    start: 284.13,
    duration: 5.25,
  },
  {
    text: "younger kids most of the flights in our",
    start: 287.12,
    duration: 4.45,
  },
  { text: "pattern our domestic hops between", start: 289.38, duration: 4.14 },
  {
    text: "airports that are relatively close by",
    start: 291.57,
    duration: 4.71,
  },
  {
    text: "one another but it's getting into the",
    start: 293.52,
    duration: 6.02,
  },
  {
    text: "teen years that we add more and faster",
    start: 296.28,
    duration: 5.97,
  },
  {
    text: "transcontinental flights that go through",
    start: 299.54,
    duration: 5.95,
  },
  {
    text: "key airline hubs try going anywhere in",
    start: 302.25,
    duration: 4.32,
  },
  { text: "this country without going through", start: 305.49, duration: 5.04 },
  {
    text: "O'Hare the same principle is true in the",
    start: 306.57,
    duration: 6.57,
  },
  { text: "brain and this reconfiguration of", start: 310.53, duration: 5.61 },
  {
    text: "networks allows messages to pass faster",
    start: 313.14,
    duration: 5.97,
  },
  {
    text: "and more efficiently between distant",
    start: 316.14,
    duration: 5.66,
  },
  { text: "parts of the globe or in our case", start: 319.11, duration: 7.92 },
  {
    text: "distant parts of the brain this network",
    start: 321.8,
    duration: 7.78,
  },
  { text: "reorganization is important it's", start: 327.03, duration: 4.38 },
  {
    text: "important because different parts of the",
    start: 329.58,
    duration: 4.44,
  },
  {
    text: "brain are set up to be good at different",
    start: 331.41,
    duration: 6.12,
  },
  {
    text: "kinds of jobs so when local neighboring",
    start: 334.02,
    duration: 4.89,
  },
  {
    text: "parts of the brain talk to one another",
    start: 337.53,
    duration: 4.2,
  },
  {
    text: "those smaller networks can be very good",
    start: 338.91,
    duration: 5.22,
  },
  {
    text: "at specific kinds of jobs things like",
    start: 341.73,
    duration: 5.55,
  },
  {
    text: "recognizing mom's face but it's when",
    start: 344.13,
    duration: 5.34,
  },
  {
    text: "multiple distributed parts of the brain",
    start: 347.28,
    duration: 5.4,
  },
  {
    text: "become more strongly synchronized that",
    start: 349.47,
    duration: 5.37,
  },
  {
    text: "large-scale functional brain networks",
    start: 352.68,
    duration: 4.23,
  },
  {
    text: "can be involved in complex cognitive",
    start: 354.84,
    duration: 5.04,
  },
  {
    text: "jobs things like being able to regulate",
    start: 356.91,
    duration: 5.52,
  },
  {
    text: "your emotions or adapt to a changing",
    start: 359.88,
    duration: 6.18,
  },
  { text: "world and that's the second major", start: 362.43, duration: 6.17 },
  {
    text: "developmental event of the teen years",
    start: 366.06,
    duration: 5.43,
  },
  {
    text: "improvements in higher order cognitive",
    start: 368.6,
    duration: 5.77,
  },
  {
    text: "functions these kinds of self regulatory",
    start: 371.49,
    duration: 6.21,
  },
  {
    text: "abilities remember back to when you were",
    start: 374.37,
    duration: 6.12,
  },
  { text: "an early teen how did you react to", start: 377.7, duration: 5.88 },
  { text: "stress or something dangerous but", start: 380.49, duration: 6.57 },
  {
    text: "exciting in your world early on most of",
    start: 383.58,
    duration: 5.58,
  },
  {
    text: "us were not so great at regulating our",
    start: 387.06,
    duration: 4.83,
  },
  {
    text: "feelings or impulses in those contexts",
    start: 389.16,
    duration: 5.25,
  },
  {
    text: "but as we move through the teen years we",
    start: 391.89,
    duration: 3.77,
  },
  { text: "get better", start: 394.41, duration: 5.36 },
  {
    text: "a lot better at self-regulation and it's",
    start: 395.66,
    duration: 6.54,
  },
  {
    text: "a good thing that we do because the",
    start: 399.77,
    duration: 4.47,
  },
  {
    text: "third major developmental event is the",
    start: 402.2,
    duration: 4.95,
  },
  { text: "intense set of social changes and", start: 404.24, duration: 5.13 },
  {
    text: "transitions to independence that we all",
    start: 407.15,
    duration: 6.8,
  },
  {
    text: "navigate a first romance a first frenemy",
    start: 409.37,
    duration: 7.32,
  },
  {
    text: "leaving your parents house starting in",
    start: 413.95,
    duration: 4.18,
  },
  { text: "the workforce these are all normal", start: 416.69, duration: 3.33 },
  { text: "challenges but there are also", start: 418.13, duration: 4.32 },
  {
    text: "substantial stressors and navigating",
    start: 420.02,
    duration: 4.64,
  },
  {
    text: "those stressors in healthy ways requires",
    start: 422.45,
    duration: 5.15,
  },
  { text: "you guessed it extraordinary", start: 424.66, duration: 6.67 },
  { text: "self-regulation now you might be", start: 427.6, duration: 5.8 },
  {
    text: "wondering what does any of this have to",
    start: 431.33,
    duration: 5.28,
  },
  { text: "do with depression well given the", start: 433.4, duration: 6.21 },
  {
    text: "dynamic nature of teen neurodevelopment",
    start: 436.61,
    duration: 4.68,
  },
  {
    text: "perhaps it comes as no surprise that",
    start: 439.61,
    duration: 4.74,
  },
  {
    text: "this Bermuda Triangle is a window of",
    start: 441.29,
    duration: 6.12,
  },
  {
    text: "risk teen brain and cognitive systems",
    start: 444.35,
    duration: 5.52,
  },
  {
    text: "are changing and that malleability may",
    start: 447.41,
    duration: 5.69,
  },
  {
    text: "make us more susceptible to disruption",
    start: 449.87,
    duration: 6.87,
  },
  {
    text: "what that means is that unusual very",
    start: 453.1,
    duration: 5.83,
  },
  {
    text: "intense or traumatic stress events in",
    start: 456.74,
    duration: 4.32,
  },
  {
    text: "the teen years can have bigger and more",
    start: 458.93,
    duration: 5.16,
  },
  {
    text: "lasting impacts on mental health than if",
    start: 461.06,
    duration: 5.79,
  },
  {
    text: "the same kinds of events occurred later",
    start: 464.09,
    duration: 6.03,
  },
  {
    text: "in adulthood think of it like building a",
    start: 466.85,
    duration: 5.46,
  },
  {
    text: "house the structure is most vulnerable",
    start: 470.12,
    duration: 4.5,
  },
  {
    text: "to damage while the foundation is being",
    start: 472.31,
    duration: 7.8,
  },
  {
    text: "poured but there's good news too the",
    start: 474.62,
    duration: 8.37,
  },
  {
    text: "same team developmental dynamics that",
    start: 480.11,
    duration: 5.01,
  },
  {
    text: "make this a window of risk also make it",
    start: 482.99,
    duration: 5.04,
  },
  {
    text: "a window of opportunity those normal",
    start: 485.12,
    duration: 5.7,
  },
  {
    text: "challenges learning to drive going to",
    start: 488.03,
    duration: 6.06,
  },
  { text: "college they can also be deeply", start: 490.82, duration: 6.23 },
  {
    text: "enriching and boost brain resilience if",
    start: 494.09,
    duration: 5.46,
  },
  { text: "we have the right support and", start: 497.05, duration: 6.18 },
  {
    text: "scaffolding to develop coping skills and",
    start: 499.55,
    duration: 7.14,
  },
  {
    text: "it gets better because any of us at any",
    start: 503.23,
    duration: 6.58,
  },
  {
    text: "age can build resilience and not just",
    start: 506.69,
    duration: 6.18,
  },
  { text: "resilience but thriving yes", start: 509.81, duration: 5.4 },
  {
    text: "our brains are less dynamic after the",
    start: 512.87,
    duration: 4.02,
  },
  {
    text: "team years but that doesn't mean that",
    start: 515.21,
    duration: 4.56,
  },
  {
    text: "older brains are static our brains are",
    start: 516.89,
    duration: 5.04,
  },
  {
    text: "functionally changing all the time",
    start: 519.77,
    duration: 4.079,
  },
  {
    text: "your brains are changing right now as",
    start: 521.93,
    duration: 3.93,
  },
  {
    text: "you listen to me speak and they will",
    start: 523.849,
    duration: 5.071,
  },
  { text: "change if you learn Italian", start: 525.86, duration: 6.39 },
  {
    text: "or heal from depression remember that",
    start: 528.92,
    duration: 6.03,
  },
  {
    text: "any house can be remodeled even many",
    start: 532.25,
    duration: 6.079,
  },
  {
    text: "decades after the foundation was built",
    start: 534.95,
    duration: 9.42,
  },
  {
    text: "so what can we do to thrive well we can",
    start: 538.329,
    duration: 8.671,
  },
  {
    text: "take care of ourselves adequate sleep",
    start: 544.37,
    duration: 5.459,
  },
  {
    text: "nutrition physical activity spending",
    start: 547.0,
    duration: 4.779,
  },
  {
    text: "time with the people who are good for us",
    start: 549.829,
    duration: 4.351,
  },
  {
    text: "these are wellness practices that we can",
    start: 551.779,
    duration: 4.201,
  },
  {
    text: "all try to build into our daily lives",
    start: 554.18,
    duration: 4.409,
  },
  {
    text: "and although they sound like small steps",
    start: 555.98,
    duration: 5.13,
  },
  {
    text: "when these practices become wellness",
    start: 558.589,
    duration: 5.25,
  },
  {
    text: "habits they lay an important foundation",
    start: 561.11,
    duration: 7.56,
  },
  {
    text: "for emotional sturdiness second we can",
    start: 563.839,
    duration: 8.011,
  },
  {
    text: "choose our stress stress can be good for",
    start: 568.67,
    duration: 6.69,
  },
  {
    text: "us at any age if we are purposeful in",
    start: 571.85,
    duration: 5.97,
  },
  {
    text: "choosing some of our stress experiences",
    start: 575.36,
    duration: 4.8,
  },
  {
    text: "and the coping skills that we intend to",
    start: 577.82,
    duration: 6.629,
  },
  {
    text: "deploy I might apply for a job or try to",
    start: 580.16,
    duration: 7.02,
  },
  {
    text: "make a new friend knowing that I may get",
    start: 584.449,
    duration: 5.791,
  },
  {
    text: "rejected but prepared to lean on my",
    start: 587.18,
    duration: 5.61,
  },
  {
    text: "family or go for a hike or take the dog",
    start: 590.24,
    duration: 4.709,
  },
  {
    text: "for a walk whatever it is that keeps me",
    start: 592.79,
    duration: 5.7,
  },
  {
    text: "well and then those coping skills are in",
    start: 594.949,
    duration: 6.271,
  },
  {
    text: "my toolbox and ready for the stress that",
    start: 598.49,
    duration: 7.44,
  },
  {
    text: "I don't choose third we can foster a",
    start: 601.22,
    duration: 7.38,
  },
  {
    text: "culture of openness and eradicate the",
    start: 605.93,
    duration: 6.17,
  },
  { text: "stigma around mental illness yes", start: 608.6, duration: 6.72 },
  {
    text: "depression is the mental sickness and it",
    start: 612.1,
    duration: 5.29,
  },
  {
    text: "is a physical sickness it is a sickness",
    start: 615.32,
    duration: 4.889,
  },
  {
    text: "that manifests or is reflected in the",
    start: 617.39,
    duration: 5.699,
  },
  {
    text: "brain and guess what your brain is part",
    start: 620.209,
    duration: 4.761,
  },
  { text: "of your body", start: 623.089, duration: 5.521 },
  {
    text: "depression is no less real and no more",
    start: 624.97,
    duration: 5.739,
  },
  {
    text: "shameful than cardiovascular disease or",
    start: 628.61,
    duration: 5.57,
  },
  {
    text: "diabetes and just like those sicknesses",
    start: 630.709,
    duration: 6.421,
  },
  {
    text: "depression is treatable but we have to",
    start: 634.18,
    duration: 5.019,
  },
  {
    text: "be willing to talk about it in order to",
    start: 637.13,
    duration: 7.59,
  },
  {
    text: "get help and finally as a community we",
    start: 639.199,
    duration: 7.44,
  },
  {
    text: "can highlight depression as a public",
    start: 644.72,
    duration: 3.929,
  },
  { text: "health priority that is just as", start: 646.639, duration: 4.38 },
  {
    text: "important as any other deadly illness",
    start: 648.649,
    duration: 5.401,
  },
  {
    text: "and we can support medical science aimed",
    start: 651.019,
    duration: 5.3,
  },
  { text: "at discovering new truths about", start: 654.05, duration: 5.55 },
  {
    text: "depression because although there",
    start: 656.319,
    duration: 5.441,
  },
  {
    text: "remains so much that we don't understand",
    start: 659.6,
    duration: 3.11,
  },
  { text: "about depression", start: 661.76, duration: 4.32 },
  { text: "we do know this yes", start: 662.71, duration: 5.65 },
  {
    text: "depression may indeed be a sickness of",
    start: 666.08,
    duration: 5.46,
  },
  {
    text: "the brain but having depression does not",
    start: 668.36,
    duration: 5.88,
  },
  {
    text: "mean that your brain is broken you are",
    start: 671.54,
    duration: 9.6,
  },
  {
    text: "not broken you and we can thrive thank",
    start: 674.24,
    duration: 9.05,
  },
  { text: "you", start: 681.14, duration: 2.15 },
  { text: "you", start: 689.18, duration: 2.06 },
];

function TKS() {
  const [editorWidth, setWidth] = React.useState(true);

  const [nlist, setNlist] = React.useState(["A", "b", "C"]);
  const [nodeCheck, setNodecheck] = React.useState(true);
  const [noteText, setNoteText] = React.useState("");
  const [entityList, setEntityList] = React.useState([]);
  const nodeRef = React.useRef();
  const [color, setColor] = React.useState(0.0);
  const [play, setPlay] = React.useState(true);

  const subtitles = vttext.map((each, index) => {
    return (
      <p
        key={index}
        onClick={(e) => {}}
        class={`mx-1 leading-6 text-lg font-medium my-1 ${
          color < each.start ? "bg-white" : "bg-gray-300 shadow-lg"
        } inline`}
      >
        {each.text + " "}
      </p>
    );
  });

  React.useEffect(() => {
    if (nodeRef.current.value.length !== 0) {
      setNlist((prevstate) => [...prevstate, nodeRef.current.value]);
      console.log(nlist);
    }
  }, [nodeCheck]);

  const nlists = nlist.map((each, index) => {
    return (
      <li
        id={index}
        onClick={(e) => {
          setNlist((prevstate) => prevstate.filter((item) => item !== each));
          console.log(nlist);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-2 h-2 mr-2 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        <p className="badge badge-warning cursor-pointer">{each}</p>
      </li>
    );
  });

  return (
    <div className="">
      <Navbar />
      <div className="w-full h-screen bg-white-400">
        <div className="flex flex-col  ">
          <div className="p-2 text-6xl row-span-1 ">
            <div className="form-control">
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered text-2xl font-bold"
              />
            </div>
          </div>
          <Nodes
            nlists={nlists}
            nodeRef={nodeRef}
            nodeCheckFunc={(e) => {
              setNodecheck(!nodeCheck);
            }}
          />
          <div className="my-2 flex flex-col-2 justify-between items-center">
            <div class="m-2 flex items-start justify-center "></div>
            <div className="flex justify-center items-baseline">
              <div className={`${editorWidth ? "m-4 w-full" : "w-2/3"} `}>
                <div class=" flex  justify-center items-center">
                  <div class="flex gap-4 w-full justify-center items-center">
                    <ReactPlayer
                      progressInterval={1000}
                      playing={play}
                      onProgress={(played) => {
                        setColor(played.playedSeconds);
                      }}
                      url="https://www.youtube.com/watch?v=ZQUBFgenMXk"
                      config={{
                        file: {
                          tracks: [
                            {
                              kind: "subtitles",
                              src: "./videovtt.vtt",
                              srcLang: "en",
                              default: true,
                            },
                          ],
                        },
                      }}
                    />

                    <div
                      className={`${editorWidth ? "hidden" : "visible w-1/3 "}`}
                    >
                      <Notecard
                        entityList={entityList}
                        entityFunc={(e) => {
                          const id = e.currentTarget.getAttribute("id");
                          setEntityList(
                            entityList.filter(
                              (item, index) =>
                                index.toString() !== id.toString()
                            )
                          );
                          console.log(id);
                        }}
                        closeFunc={(e) => {
                          setWidth(true);
                        }}
                        addEntityFunc={(e) => {
                          console.log(window.getSelection().toString());

                          setEntityList([
                            ...entityList,
                            { label: window.getSelection().toString() },
                          ]);
                        }}
                        text={noteText}
                      />
                    </div>
                  </div>
                  <div></div>
                </div>

                <div class="my-2 flex justify-end items-end ">
                  <div
                    class="mx-2 btn  text-lg"
                    onClick={(e) => {
                      setPlay(!play);
                    }}
                  >
                    {play ? <FaPauseCircle /> : <FaPlayCircle />}
                  </div>
                  <div
                    class="btn btn-primary"
                    onClick={(e) => {
                      setPlay(false);
                      setNoteText(window.getSelection().toString());
                      setWidth(false);
                      setEntityList([]);
                    }}
                  >
                    ADD
                  </div>
                </div>

                <div class="p-2 text-left h-96 overflow-y-auto">
                  {subtitles}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TKS;
