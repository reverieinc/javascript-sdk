# Text Analysis

## Steps to Run the Application

### Prerequisites:

- **VS Code** installed
- **Node.js** installed (for Webpack-based setup)

### Running the Application:

1. **Install Dependencies**

   - Open the terminal in VS Code
   - Run:
     ```sh
     npm install
     ```

2. **Start the Dev Server**

   - Run:
     ```sh
     npm start
     ```
   - This will start the Webpack Dev Server on `http://localhost:3000/`

3. **Build for Production**

   - Run:
     ```sh
     npm run build
     ```
   - This will generate the bundled files in the `dist/` folder

4. **Using the Application**
   - Enter your text in the provided text box.
   - Select the required analysis features using the toggle switches.
   - Click **Analyze** to process the text.
   - Results will be displayed in different tabs based on the selected features.
   - Click **Reset** to clear the input.

## Supported Languages

The following languages are supported for all NLP functionalities:

- Hindi (`hi`)
- English (`en`)
- Bengali (`bn`)
- Tamil (`ta`)
- Telugu (`te`)
- Malayalam (`ml`)
- Kannada (`kn`)
- Gujarati (`gu`)
- Marathi (`mr`)
- Odia (`or`)
- Punjabi (`pa`)
- Assamese (`as`)

## API Parameters

### 1. PII Redaction

- **Input Parameters:**
  - `Text`: Input text.
  - `Language`: Language of the input text.
  - `Redaction Method`: `'Hash'` (default) - replaces redacted values with `#` of the same length.
  - `PII Types`: List of specific PII types to redact (optional). Available types:
    - `location`, `amount`, `money`, `number`, `organization`, `person_name`, `date`, `time`, `phone_number`, `email_ids`
  - If no types are specified, all detected entities will be redacted.
- **Supported Languages:** All listed above.

### 2. Summarization

- **Input Parameters:**
  - `Text`: Input text.
  - `Language`: Language of the input text.
  - `Summary Type`: Available types:
    - `'bullets'`, `'bullets_verbose'`, `'gist'` (default), `'headline'`, `'paragraph'`
  - **Note:** Summarization is disabled for text containing profane or abusive words.
- **Supported Languages:** All listed above.

### 3. Entity Recognition

- **Input Parameters:**
  - `Text`: Input text.
  - `Language`: Language of the input text.
  - `Entity Types`: List of specific entity types to identify (optional). Available types:
    - `name`, `location`, `date`, `organization`, `amount`, `number`, `time`, `phone_number`, `email_ids`, `hashtags`, `urls`
  - If no types are specified, all detected entities will be returned.
- **Supported Languages:** All listed above.

### 4. Sentiment Analysis

- **Input Parameters:**
  - `Text`: Input text.
  - `Language`: Language of the input text.
  - `Level`: Defines the context window length. Available values:
    - `'sentence'`, `'paragraph'`, `'whole text'`
  - **Note:** Currently, only `whole text` level is supported.
- **Supported Languages:** All listed above.

### 5. Content Moderation

- **Input Parameters:**
  - `Text`: Input text.
  - `Language`: Language of the input text.
  - `Default Setting`: `"Profanity"` (detects and flags profane content).
- **Supported Languages:** All listed above.

## Usage

To use any of these functionalities, send a POST request to the appropriate API endpoint with the required parameters in JSON format.
