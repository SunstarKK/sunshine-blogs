---
title: 'The Great LLM Debate: Open Source or Commercial?'
pubDate: 2024-05-05
description: 'Comparing the pros and cons of open-source and commercial AI models.'
author: 'SunstarK'
tags: ["journal", "AI", "open-source", "commercial"]
---

# The Great LLM Debate: Open Source or Commercial?

Happy Easter! I've been on holiday for the past few weeks, soaking up time with friends and enjoying all the good things about being young. Let's just say, I can't remember the last time I had this much fun (and maybe a few too many drinks, haha!). Speaking of fun, it really got me thinking about what truly matters in life. It's definitely the time we spend doing what we love, whether it's pursuing hobbies or just catching up with friends. Don't get stuck following some pre-defined system – life's too short for that!

Now, back in the real world (aka social media), there's been a lot of buzz lately about Meta's new open-source model, Llama 3. People have even been fine-tuning it way beyond its original context window (Llama 3's context window is too short, at **just over 8,000 tokens**, meanwhile developers have been extending it over 1M tokens), which sparked an interesting debate: can open-source models ever compete with closed-source models developed by companies like OpenAI and Anthropic? It's a fascinating question, and I'm curious to see where the conversation goes.

## Commercial Models like Claude and GPT-4
### The Pros

- **Data Privacy**: Employees are less likely to accidentally spill the beans on confidential information when using commercial models like Claude 3 from Anthropic. No more accidentally leaking trade secrets à la Samsung employees and ChatGPT.
- **Functionality**: Commercial models often come packed with fancy features like function calling and JSON mode right out of the box. Fancy, right? GPT-3.5 and beyond from OpenAI is a prime example of this.

### The Cons

- **Limited API Access**: Most commercial providers are a bit stingy when it comes to giving you access to logs and other features. Even with models like Claude 3, extended features like multimodality can be tricky to access. And not to mention logprobs, you can forget about those.
- **API Cost**: Using these commercial models can get pricey, especially at scale. You might need to start a side hustle just to afford those API calls for something like GPT-4.
- **Finetuning Restrictions**: Some providers might not let you finetune their models, which means you're stuck with their off-the-shelf version, even if it's not a perfect fit for your use case. This can be a bummer for models like Claude Sonnet (**which imo is truly a bang for the buck deal**) or GPT-4 if you need specific customizations.
- **Lack of Control and Transparency**: It's like a black box – you never know when they'll change something under the hood, and suddenly, your prompts stop working as expected. Talk about a rude awakening - not to mention the whole fiasco when people's dumb queries ended up ruining GPT 3.5's performance which kept hallucinating at every question for almost 24 full hours lol.
- **Edge Use Cases**: Forget about using these commercial models in places without an internet connection. They're about as useful as a chocolate teapot in those situations.

## Open Source Models like Llama and Mistral

### The Pros

- **Data Lineage/Copyright**: People are less likely to come after open-source model builders for training on copyrighted data when using models like Llama or Mistral. However, if you plan to make money off these models, you might still want to tread carefully.
- **Functionality**: When you host these models yourself, you get access to all the juicy details, like logprobs and other intermediate outputs. Plus, there are external tools that can give you fancy features like function calling and constrained sampling (although they might be a bit limited) for models like Llama or Mistral.
- **Finetuning**: In theory, you can finetune open-source models like Llama or Mistral to your heart's content, tailoring them to your specific use case. Customization, baby!

### The Cons

- **Engineering Cost**: Hosting, optimizing, and maintaining these large models like Llama or Mistral is no walk in the park. It takes serious time, talent, and effort. Unless, of course, you use a model hosting service that supports the models you want to use – then it's a bit easier.
- **Functionality Limitations**: While external tools can give you some advanced functionality for open-source models, they might not be as robust or comprehensive as what commercial providers offer for models like GPT-4 or Claude 3 Family.

So, there you have it – the great LLM debate in all its glory. Whether you choose to go the open-source or commercial route, just remember that there are pros and cons to each approach. It all comes down to your specific needs, budget, and appetite for engineering challenges.