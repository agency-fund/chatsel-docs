---
sidebar_position: 3
---

# LLM Evals

## What is "eval"?
"Eval" stands for evaluation. Unlike "evaluation" in social impact projects, which typically refers to impact evaluation, "eval" in the context of GenAI usually refers to the systematic assessment of the performance of large language models (LLMs) and their associated applications.

> Evaluation metrics for LLM can be broadly classified into traditional and nontraditional metrics. 
> - Traditional evaluation metrics rely on the arrangement and order of words and phrases in the text and are used in combination where a reference text (ground truth) exists to compare the predictions against. 
> - Nontraditional metrics make use of semantic structure and capabilities of language models for evaluating generated text.

<img src={require('/img/llm-evals.jpg').default} />

*Reference: Please see this post for a comprehensive review of [LLM evals](https://explodinggradients.com/all-about-evaluating-large-language-models).*

### A note on eval from a non-technical perspective
Imagine you’re teaching a student. After a lesson, you’d give them a test to see how well they’ve understood the material — whether they can solve problems, answer questions correctly, and apply what they’ve learned.

An LLM eval is like that test, but for an AI language model instead of a student. It checks how well the AI performs at specific tasks, like answering questions accurately, summarizing information, or following instructions. Just as teachers use different tests for math, history, or writing, AI evaluations use different methods to see how good the model is at different skills.

The goal is to figure out what the AI does well, where it makes mistakes, and how it can be improved — just like helping a student become a better learner.

## What is our eval strategy for ChatSEL?
_TBD..._

[RAGAS metrics](https://docs.ragas.io/en/stable/concepts/metrics/overview/)

<img src={require('/img/ragas-metrics.jpg').default} />