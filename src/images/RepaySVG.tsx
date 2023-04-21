import React from "react";

const SourcesSVG = (props: any) => {
  // console.log(props);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="271"
      height="111"
      fill="none"
    >
      <path
        stroke="#000"
        strokeWidth="1.341"
        d="M56.628 71.724C85.934 58.627 93.846 39.34 116.705 39.34c28.573 0 35.109 21.633 65.538 21.633C212.672 60.972 223.624 1 270.148 1"
      ></path>
      <path
        stroke={props.line}
        strokeWidth="1.341"
        d="M56.628 107.423c29.362-13.097 38.054-15.155 60.957-15.155 28.629 0 33.165 7.41 63.652 7.41 40.512 0 49.844-30.985 88.911-30.985"
      ></path>
      <rect
        width="7.409"
        height="7.409"
        x="53.26"
        y="67.009"
        fill="#000"
        rx="3.705"
      ></rect>
      <rect
        width="7.409"
        height="7.409"
        x="53.26"
        y="102.708"
        fill={props.line}
        rx="3.705"
      ></rect>
      <path
        fill="#000"
        d="M19.681 64.315v-7.838h2.94c.601 0 1.107.105 1.515.314.41.21.72.503.93.88.212.375.317.813.317 1.313 0 .503-.107.939-.321 1.309a2.122 2.122 0 01-.938.853c-.413.2-.92.299-1.523.299h-2.093v-1.179h1.902c.352 0 .64-.048.865-.145.224-.1.39-.244.497-.433.11-.191.165-.426.165-.704a1.44 1.44 0 00-.165-.712 1.047 1.047 0 00-.501-.451c-.225-.105-.514-.157-.869-.157h-1.301v6.651h-1.42zm4.05-3.551l1.94 3.551h-1.585l-1.906-3.551h1.55zm5.201 3.666c-.59 0-1.099-.123-1.527-.367a2.488 2.488 0 01-.984-1.05c-.23-.453-.344-.988-.344-1.603 0-.604.115-1.135.344-1.592.232-.459.556-.816.972-1.071.416-.258.905-.387 1.466-.387.362 0 .704.059 1.026.176.324.115.61.294.857.536.25.242.447.551.59.926.142.373.214.817.214 1.332v.425h-4.819v-.934h3.49a1.49 1.49 0 00-.171-.708 1.253 1.253 0 00-.471-.494 1.324 1.324 0 00-.697-.18 1.35 1.35 0 00-.746.207 1.423 1.423 0 00-.501.536c-.118.22-.178.46-.18.723v.815c0 .342.062.636.187.88.125.243.3.43.525.56.224.127.487.19.788.19.201 0 .384-.027.547-.084.163-.058.305-.144.425-.256.12-.112.21-.251.272-.417l1.293.145c-.081.342-.237.64-.467.896a2.294 2.294 0 01-.872.59 3.36 3.36 0 01-1.217.206zm8.653-5.993l-2.094 5.878h-1.53l-2.094-5.878h1.477l1.351 4.366h.061l1.355-4.366h1.474zm3.145 5.993c-.59 0-1.098-.123-1.527-.367a2.489 2.489 0 01-.983-1.05c-.23-.453-.345-.988-.345-1.603 0-.604.115-1.135.345-1.592.232-.459.556-.816.972-1.071.416-.258.904-.387 1.465-.387.363 0 .705.059 1.026.176.324.115.61.294.857.536.25.242.447.551.59.926.143.373.214.817.214 1.332v.425h-4.818v-.934h3.49a1.49 1.49 0 00-.172-.708 1.251 1.251 0 00-.47-.494 1.323 1.323 0 00-.697-.18 1.35 1.35 0 00-.747.207 1.425 1.425 0 00-.501.536c-.117.22-.177.46-.18.723v.815c0 .342.063.636.188.88.125.243.3.43.524.56.224.127.487.19.788.19.202 0 .384-.027.548-.084.163-.058.304-.144.424-.256.12-.112.21-.251.272-.417l1.294.145c-.082.342-.238.64-.467.896a2.29 2.29 0 01-.873.59 3.36 3.36 0 01-1.217.206zm4.956-3.56v3.445H44.3v-5.878h1.325v.999h.069c.135-.33.35-.591.646-.785.299-.194.668-.29 1.106-.29.406 0 .76.086 1.06.26.304.173.539.424.705.753.168.33.251.729.248 1.198v3.743h-1.385v-3.528c0-.393-.102-.7-.306-.923-.202-.222-.481-.333-.838-.333-.243 0-.458.054-.647.161a1.115 1.115 0 00-.44.456 1.53 1.53 0 00-.157.723zm8.713.973v-3.406h1.385v5.878h-1.343V63.27h-.061c-.133.33-.351.599-.655.808-.3.21-.672.314-1.113.314-.386 0-.726-.086-1.022-.257a1.783 1.783 0 01-.689-.754c-.166-.331-.249-.732-.249-1.201v-3.743h1.386v3.528c0 .373.102.669.306.888.204.22.472.33.803.33.205 0 .402-.05.594-.15.191-.1.348-.247.47-.444.125-.199.188-.448.188-.746zm5.197 2.587c-.59 0-1.098-.123-1.527-.367a2.488 2.488 0 01-.984-1.05c-.23-.453-.344-.988-.344-1.603 0-.604.115-1.135.344-1.592.233-.459.556-.816.972-1.071.416-.258.905-.387 1.466-.387.362 0 .704.059 1.026.176.324.115.61.294.857.536.25.242.447.551.59.926.142.373.214.817.214 1.332v.425h-4.82v-.934h3.49a1.49 1.49 0 00-.172-.708 1.251 1.251 0 00-.47-.494 1.323 1.323 0 00-.697-.18 1.35 1.35 0 00-.746.207 1.425 1.425 0 00-.501.536c-.118.22-.178.46-.18.723v.815c0 .342.062.636.187.88.125.243.3.43.525.56.224.127.487.19.788.19.201 0 .384-.027.547-.084.163-.058.305-.144.425-.256.12-.112.21-.251.272-.417l1.293.145c-.081.342-.237.64-.467.896a2.294 2.294 0 01-.872.59 3.36 3.36 0 01-1.217.206z"
      ></path>
      <path
        fill={props.line}
        d="M.148 100.014v-7.838h2.939c.602 0 1.107.105 1.515.314.411.21.721.503.93.88.212.375.318.813.318 1.313 0 .503-.107.939-.321 1.309a2.121 2.121 0 01-.938.853c-.413.2-.921.299-1.523.299H.974v-1.179h1.902c.353 0 .64-.049.865-.145.225-.1.39-.244.498-.433.11-.191.164-.426.164-.704a1.44 1.44 0 00-.164-.712 1.047 1.047 0 00-.502-.452c-.224-.104-.514-.156-.868-.156H1.568v6.651H.148zm4.049-3.551l1.94 3.551H4.553l-1.906-3.551h1.55zm5.201 3.666c-.589 0-1.098-.123-1.527-.368a2.488 2.488 0 01-.983-1.048c-.23-.454-.345-.989-.345-1.604 0-.604.115-1.135.345-1.592.232-.459.556-.816.972-1.071.416-.258.904-.387 1.466-.387.362 0 .704.059 1.025.176.324.115.61.294.858.536.25.242.446.551.589.926.143.373.214.817.214 1.332v.425H7.194v-.934h3.49a1.49 1.49 0 00-.172-.708 1.253 1.253 0 00-.47-.494 1.324 1.324 0 00-.697-.18 1.35 1.35 0 00-.746.207 1.424 1.424 0 00-.502.536c-.117.22-.177.46-.18.723v.815c0 .342.063.636.188.88.125.243.3.43.524.56.225.127.488.19.789.19.201 0 .384-.027.547-.084.163-.058.305-.144.425-.256.12-.112.21-.251.271-.417l1.294.145c-.082.342-.237.64-.467.896a2.29 2.29 0 01-.873.59c-.354.137-.76.206-1.217.206zm3.571 2.089v-8.082h1.362v.972h.08c.072-.143.173-.295.303-.456.13-.163.306-.302.528-.417.222-.117.505-.176.85-.176.454 0 .863.116 1.228.348.368.23.659.57.873 1.022.217.45.325 1 .325 1.653 0 .646-.106 1.195-.318 1.646-.211.452-.5.796-.864 1.034a2.225 2.225 0 01-1.24.355c-.337 0-.617-.056-.839-.168a1.705 1.705 0 01-.535-.406 2.623 2.623 0 01-.31-.455h-.058v3.13H12.97zm1.358-5.143c0 .38.054.713.161.999.11.285.267.509.47.67.208.158.458.237.751.237.306 0 .563-.082.77-.245a1.51 1.51 0 00.466-.678c.107-.288.16-.616.16-.983 0-.365-.051-.689-.156-.972a1.46 1.46 0 00-.467-.666c-.207-.16-.464-.241-.773-.241-.296 0-.547.078-.754.233a1.436 1.436 0 00-.47.655c-.105.28-.158.61-.158.99zm6.853 3.058c-.372 0-.707-.067-1.006-.2a1.642 1.642 0 01-.704-.596c-.171-.263-.257-.587-.257-.972 0-.332.062-.606.184-.823.123-.217.29-.39.501-.52.212-.13.45-.23.716-.295a5.83 5.83 0 01.83-.15c.345-.035.624-.067.839-.095.214-.031.37-.077.467-.138.1-.064.149-.162.149-.295v-.023c0-.288-.086-.511-.257-.67-.17-.158-.417-.237-.738-.237-.34 0-.609.074-.808.222a1.105 1.105 0 00-.398.525l-1.293-.184c.102-.357.27-.656.505-.896.235-.242.522-.423.861-.543.34-.123.714-.184 1.125-.184.283 0 .565.033.846.1.28.066.537.176.77.329.231.15.418.356.558.616.143.26.214.585.214.976v3.934h-1.332v-.807h-.046a1.691 1.691 0 01-.355.459c-.15.14-.341.254-.57.34a2.28 2.28 0 01-.8.127zm.36-1.018c.278 0 .52-.055.724-.165.204-.112.36-.26.47-.444.112-.183.169-.384.169-.6v-.693a.65.65 0 01-.222.1 3.13 3.13 0 01-.345.08 10.61 10.61 0 01-.379.06l-.325.047a2.42 2.42 0 00-.555.137.922.922 0 00-.386.268.655.655 0 00-.142.437c0 .255.093.447.28.578.186.13.423.195.711.195zm4.572 3.103a2.86 2.86 0 01-.524-.045 2.027 2.027 0 01-.379-.1l.322-1.079c.201.058.381.087.54.084a.664.664 0 00.416-.149c.123-.095.226-.253.31-.475l.119-.317-2.132-6.001h1.47l1.355 4.44h.061l1.359-4.44h1.473l-2.354 6.59c-.11.311-.255.578-.436.8a1.786 1.786 0 01-.666.513 2.23 2.23 0 01-.934.179zm5.133-2.204v-5.878h1.324v.999h.07c.122-.337.325-.6.608-.789.283-.191.621-.287 1.014-.287.398 0 .733.097 1.006.291.276.191.47.453.582.785h.061c.13-.327.35-.587.659-.781.31-.197.68-.295 1.106-.295.54 0 .982.171 1.324.513.342.342.513.84.513 1.496v3.946h-1.39v-3.731c0-.365-.096-.632-.29-.8a1.039 1.039 0 00-.712-.257c-.334 0-.596.105-.785.314-.186.207-.28.476-.28.808v3.666h-1.358v-3.789c0-.303-.092-.546-.275-.727-.181-.181-.419-.272-.712-.272-.2 0-.38.051-.544.153-.163.1-.293.242-.39.425a1.326 1.326 0 00-.145.636v3.574h-1.386zm12.059.115c-.59 0-1.098-.123-1.527-.368a2.489 2.489 0 01-.984-1.048c-.23-.454-.344-.989-.344-1.604 0-.604.115-1.135.344-1.592a2.61 2.61 0 01.973-1.071c.415-.258.904-.387 1.465-.387.363 0 .704.059 1.026.176.324.115.61.294.857.536.25.242.447.551.59.926.142.373.214.817.214 1.332v.425H41.1v-.934h3.49a1.492 1.492 0 00-.172-.708 1.253 1.253 0 00-.471-.494 1.323 1.323 0 00-.697-.18 1.35 1.35 0 00-.746.207 1.424 1.424 0 00-.501.536c-.118.22-.178.46-.18.723v.815c0 .342.062.636.187.88.126.243.3.43.525.56.224.127.487.19.788.19.202 0 .384-.027.547-.084.164-.058.305-.144.425-.256.12-.112.21-.251.272-.417l1.294.145c-.082.342-.238.64-.467.896a2.29 2.29 0 01-.873.59 3.36 3.36 0 01-1.217.206zm4.956-3.559v3.444h-1.386v-5.878H48.2v.999h.068c.136-.33.351-.591.647-.785.299-.194.667-.29 1.106-.29.406 0 .76.086 1.06.26.304.173.539.424.705.753.168.33.25.729.248 1.198v3.743h-1.385v-3.528c0-.393-.102-.7-.306-.923-.202-.222-.481-.333-.838-.333-.243 0-.458.054-.647.16a1.116 1.116 0 00-.44.456c-.105.2-.157.44-.157.724zm7.901-2.434v1.071h-3.379v-1.071h3.38zm-2.544-1.409h1.385v5.519c0 .186.028.33.084.429a.454.454 0 00.23.199.88.88 0 00.313.053c.087 0 .166-.006.238-.019.074-.013.13-.024.168-.034l.234 1.083a2.648 2.648 0 01-.815.137 2.252 2.252 0 01-.938-.156 1.459 1.459 0 01-.662-.544c-.161-.245-.24-.551-.237-.918v-5.749zm8.049 2.963l-1.262.137a1.015 1.015 0 00-.188-.36.931.931 0 00-.352-.271 1.283 1.283 0 00-.544-.104c-.288 0-.53.063-.727.188-.194.125-.29.287-.287.486a.51.51 0 00.188.417c.13.107.344.195.643.264l1.002.215c.557.12.97.31 1.24.57.273.26.411.6.414 1.022a1.6 1.6 0 01-.326.98c-.211.28-.506.5-.884.658a3.34 3.34 0 01-1.3.237c-.72 0-1.3-.15-1.738-.452a1.816 1.816 0 01-.785-1.267l1.351-.13a.951.951 0 00.39.601c.2.135.458.203.777.203.33 0 .593-.068.793-.203.201-.135.302-.302.302-.501a.522.522 0 00-.195-.417c-.128-.11-.327-.194-.597-.253l-1.003-.21c-.564-.118-.981-.315-1.252-.594-.27-.28-.404-.635-.401-1.064a1.507 1.507 0 01.294-.94 1.93 1.93 0 01.838-.62 3.25 3.25 0 011.244-.223c.69 0 1.231.147 1.627.44.398.294.644.69.738 1.19z"
      ></path>
    </svg>
  );
};

export default SourcesSVG;
