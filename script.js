 
 const textarea = document.getElementById("myTextArea");
    const wordCountSpan = document.getElementById("wordCount");
    const charCountSpan = document.getElementById("charCount");

    textarea.addEventListener("input", () => {
      const text = textarea.value;

      // Count characters
      const charCount = text.length;

      // Count words (split by whitespace and filter out empty strings)
      const wordArray = text.trim().split(/\s+/);
      const wordCount = text.trim() === "" ? 0 : wordArray.length;

      // Update the display
      charCountSpan.textContent = charCount;
      wordCountSpan.textContent = wordCount;
    });