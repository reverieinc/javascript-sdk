# Speech-to-Text (Batch) API

## Steps to Run the Application

### Prerequisites:

- **VS Code** installed
- **Node.js** installed (for Webpack-based setup)

## Installation

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

## Usage

- Click **Start Speaking** to begin speech recognition.
- Select a language from the dropdown .
- Transcription will appear in the text area.
- Click **Reset** to clear the text.

## Query Parameters

## Headers

| Header Name     | Description                                                                   | Is Mandatory? | Value      |
| --------------- | ----------------------------------------------------------------------------- | ------------- | ---------- |
| **REV-API-KEY** | A unique key/token provided by Reverie to identify the user using the STT API | Yes           | -          |
| **REV-APP-ID**  | The unique account ID to identify the user and the default account settings   | Yes           | -          |
| **REV-APPNAME** | The parameter to identify the API                                             | Yes           | `stt_file` |

## Request Parameters

| Parameter Name | Description                                                                                                          | Is Mandatory? | Value                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------- |
| **domain**     | Specifies the domain in which the STT API is used for transcribing the audio file. Example: Banking, Insurance, etc. | Yes           | Specify the domain code. Refer to the Supporting Domain section for valid domain ID.    |
| **src_lang**   | Indicates the language in which the audio is spoken                                                                  | Yes           | Specify the language code. Refer to the Language Code section for valid language codes. |

## Supported Audio Formats

| Audio Format   | Description                                                                                |
| -------------- | ------------------------------------------------------------------------------------------ |
| **wav**        | The default audio format. Any bit depth (Pulse-code Modulation), any sample rate.          |
| **mp3**        | Compressed audio file in .mp3 format.                                                      |
| **flac**       | Free Lossless Audio Codec format.                                                          |
| **ogg_opus**   | Compressed audio format for mid to high quality (8kHz-48.0kHz, 16+ bit, polyphonic) audio. |
| **ogg_vorbis** | Format that is used for internet streaming.                                                |

## Supported Languages

| Language       | Code |
| -------------- | ---- |
| Hindi          | `hi` |
| Bengali        | `bn` |
| Gujarati       | `gu` |
| Kannada        | `kn` |
| Malayalam      | `ml` |
| Marathi        | `mr` |
| Punjabi        | `pa` |
| Tamil          | `ta` |
| Telugu         | `te` |
| Indian English | `en` |
| Assamese       | `as` |
| Odia           | `or` |
