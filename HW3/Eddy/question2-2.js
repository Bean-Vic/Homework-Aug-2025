const processString = (text) => {
    const processedText = text.toLowerCase().replace(/[^a-z ]/g, "").replace(/\s+/g, " ").trim();
    return processedText;
  };
  