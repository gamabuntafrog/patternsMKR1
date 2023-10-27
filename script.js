// В цьому завданні використовується шаблон ФАСАД


class GoogleTranslate {
  translate(text, lentgh, fromLanguage, toLanguage) {
    console.log(
      `GoogleTranlsate перекладає текст з ${fromLanguage} на ${toLanguage}`
    );

    return "Перекладений текст.............";
  }
}

class ChatGPT {
  ask(question) {
    console.log(`ChatGPT перекладає текст....`);

    return {
      question: question,
      answer: `Ось ваш перекладений текст на запит "${question}"`,
      createdAt: new Date(),
    };
  }
}

class TranslationSystem {
  constructor() {
    this.googleTranslate = new GoogleTranslate();
    this.chatGPT = new ChatGPT();
  }

  translateToUkrainian(text) {
    const translatedText = this.googleTranslate.translate(
      text,
      text.length,
      "en",
      "uk"
    );

    return translatedText;
  }

  translateWithChatGPT(text) {
    const response = this.chatGPT.ask(text);

    return response.answer;
  }

  translate(text) {
    console.log("Метод translate викликано, відбувається переадресація запиту");

    if (this.shouldUseChatGPT(text)) {
      return this.translateWithChatGPT(text);
    } else {
      return this.translateToUkrainian(text);
    }
  }

  shouldUseChatGPT(textToTranslate) {
    return textToTranslate.includes("Переклади Українською мовою текст");
  }
}

const translationSystem = new TranslationSystem();
const textToTranslateOne = "Переклади Українською мовою текст: Hello, world!";
const textToTranslateTwo = "Hello, world!";

console.log(translationSystem.translate(textToTranslateOne));
console.log(translationSystem.translate(textToTranslateTwo));
