---
sidebar_position: 2
---

# Getting Started with a GenAI Chatbot

:::tip

**Before building yet another Generative AI chatbot, here are a few key things that we had to consider at the very beginning of our journey.**

:::

## What are the problems/challenges that we are dealing with?
We believe that there is an **urgent need for Social and Emotional Learning (SEL) tools in low-resource and low-income settings**, where traditional teacher training methods are often inaccessible. Teachers in these contexts face significant time, financial, and logistical barriers to implementing SEL programs effectively, while students grapple with daily challenges in their social, emotional, and cognitive development.

For most SEL programs, the time and financial costs associated with scaling — particularly when in-person training is required — [remain prohibitive](https://www.sattva.co.in/quick-read/socio-emotional-learning-in-india/) in many low- and middle-income countries. Moreover, teachers in these settings are often [overburdened](https://riseprogramme.org/sites/default/files/inline-files/Yuan.pdf) with numerous responsibilities, leaving them with limited capacity to engage in additional training or implement new, complex programs.

## How does a GenAI tool address the problem?
Our ideal goal is to provide **continuous support to teachers**, even when in-person training and resources are limited. Therefore, a GenAI-powered WhatsApp chatbot seems to serve as an ideal co-pilot for teachers for this purpose.

Specifically, ChatSEL offers culturally relevant training on existing SEL programs, creates space for reflection and feedback, and encourages experimentation and learning during implementation. We hope that it helps with teachers' pedagogical practices and agency in teaching, while being a 24-hour always-online companion.

We will discuss the design of ChatSEL in detail in the [**Chatbot Design**](/docs/t2-behind-the-build/Chatbot%20Design/p1-system-prompt) section. 

### Is the problem solvable with non-AI solutions?
Yes, but at significantly higher costs. Many SEL programs in wealthier countries, such as the U.S., have achieved [success](https://www.sciencedirect.com/science/article/pii/S2773233924000032) through traditional in-person train-the-trainer model. If we had unlimited resources, it would certainly be possible to adapt these successful SEL programs to different cultural contexts through in-person support. However, as we scale up, the cost becomes unsustainable if every teacher requires regular, hands-on assistance.

By using GenAI technology, we can dramatically expand our support for teachers at a much lower cost. For example, our goal is to keep the cost around $2 per teacher per month for using ChatSEL (e.g., in India), while striving to replicate the benefits of in-person support. A hybrid approach, with an initial in-person kickoff training complemented by ongoing chatbot support, could allow us to reach more teachers effectively while keeping costs manageable.

## Who are the users and how do we want to change their behaviors?
- The teachers are the direct user of ChatSEL, who uses the tool to learn about and implement the SEL programs. 
    - We want the teachers to agentically develop a routine of having conversations with ChatSEL, using the insights to help with in-class SEL sessions, and giving feedback to ChatSEL.

- The students are the ultimate beneficiaries of ChatSEL, who develop their SEL skills through teacher-led SEL sessions.
    - We want the students to better engage in SEL sessions in class and develop their skills over time, as a result of teachers' behavioral change.

- For the targeted behavioral changes in teachers, we ask the following three questions about their capabilities, opportunities, and motivations in using the tool, based on insights from the [COM-B Model for Behavior Change](https://thedecisionlab.com/reference-guide/organizational-behavior/the-com-b-model-for-behavior-change).

We will discuss behavioral changes in detail in the [**Learning Engineering**](/docs/t2-behind-the-build/Learning%20Engineering/p1-learning-engineering) section.

### Do the users have sufficient capabilities to use a GenAI tool?
Our assumption is that teachers who are unfamiliar with GenAI will likely encounter issues with capabilities to use the tool. However, these issues can be identified and addressed via usability tests. 

### Do the users have sufficient opportunities to learn to use a GenAI tool?
Our assumption is that in-person trainings + AI and non-AI functional modules via a WhatsApp chatbot provide sufficient oppotunities for teachers to learn to use a GenAI tool.

### Do the users have sufficient motivation to use a GenAI tool?
Our assumption is that motivation interacts greatly with capabilities and opportunities, and varies greatly across contexts. Again, we believe that concerns around motivations can be identified and addressed via usability tests. 

## How do we move from 0 (idea) to 1 (product)?
Through our building process, we find that it is generally a good idea for the product manager to build a demo minimal viable product (MVP) using customized GPT or visual chat flow builders (e.g., on [Turn.io](https://www.turn.io/) or [Glific](https://glific.org/)). The engineering team can then iterate and improve features based on this demo.

## What is the intended impact of the tool?
ChatSEL aims to raise teachers’ engagement, efficacy, and skills in implementing the SEL curriculum in their classrooms, and ultimately enhance students’ SEL and academic outcomes, in alignment with the theory of change of the existing SEL programs. 

We will discuss measurement and evaluation in the [Model Evaluation](/docs/t2-behind-the-build/Chatbot%20Design/p3-model-evaluation) section.

## How do we evaluate the tool and iteratively improve the tool?
We will discuss the product, user, and impact evaluation of ChatSEL in detail in the [Product and User Evaluation](/docs/t2-behind-the-build/Learning%20Engineering/p4-product-user-evaluation) section.
:::warning

This page is under development...

:::

## How should we think about AI safety?
:::warning

This section is under development...

:::




