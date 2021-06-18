import Head from "next/head";
import Link from "next/link";

export default function Error() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta charset="UTF8" />
        <meta name="theme-color" content="#DF1C44" />
        <meta name="title" content="Stats-Covid19" />
        <meta name="description" content="Site de stats pour la covid19" />
        <meta name="keywords" content="covid, covid19, stats" />
        <meta name="author" content="DoctorPok" />
        <meta name="robots" content="index" />
        <meta
          property="og:image"
          content="https://zupimages.net/up/21/22/3e08.png"
        ></meta>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </Head>
      <main class="container">
        <div class="top">
          <h1>Stats-Covid19</h1>

          <div class="link">
            <Link href={``}>
              <a>all</a>
            </Link>

            <Link href={`./country`}>
              <a>select country</a>
            </Link>

            <Link href={`./country`}>
              <a id="here">404 Not Found</a>
            </Link>
          </div>
        </div>
        <div class="content4">
          <svg
            width="490"
            height="143"
            viewBox="0 0 490 143"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2.5"
              y="2.5"
              width="485"
              height="138"
              rx="27.5"
              stroke="#DF1C44"
              stroke-width="5"
            />
            <path
              d="M75 96C61.1929 96 50 84.807 50 71C50 57.1929 61.1929 46 75 46C88.807 46 100 57.1929 100 71C99.9848 84.8007 88.8007 95.9848 75 96ZM72.5 78.5V83.5H77.5V78.5H72.5ZM72.5 58.5V73.5H77.5V58.5H72.5Z"
              fill="#DF1C44"
            />
            <path
              d="M124.242 58.3906C124.883 57.2344 125.625 56.4375 126.469 56C127.312 55.5469 128.258 55.3203 129.305 55.3203C129.867 55.3203 130.406 55.3984 130.922 55.5547C131.438 55.7109 131.891 55.9609 132.281 56.3047C132.672 56.6328 132.984 57.0625 133.219 57.5938C133.453 58.125 133.57 58.7656 133.57 59.5156V77.7969H136.406C136.766 77.7969 137.078 77.8594 137.344 77.9844C137.609 78.1094 137.828 78.2734 138 78.4766C138.188 78.6797 138.32 78.9141 138.398 79.1797C138.492 79.4297 138.539 79.6953 138.539 79.9766C138.539 80.2422 138.492 80.5078 138.398 80.7734C138.32 81.0234 138.188 81.25 138 81.4531C137.828 81.6562 137.609 81.8203 137.344 81.9453C137.078 82.0703 136.766 82.1328 136.406 82.1328H133.547V86.375C133.547 86.8281 133.461 87.2266 133.289 87.5703C133.117 87.8984 132.891 88.1797 132.609 88.4141C132.344 88.6328 132.039 88.8047 131.695 88.9297C131.352 89.0391 131 89.0938 130.641 89.0938C130.281 89.0938 129.93 89.0391 129.586 88.9297C129.242 88.8047 128.93 88.6328 128.648 88.4141C128.383 88.1797 128.156 87.8984 127.969 87.5703C127.797 87.2266 127.703 86.8281 127.688 86.375V82.1328H114.75C113.828 82.1328 113.102 81.8828 112.57 81.3828C112.055 80.8672 111.797 80.2422 111.797 79.5078C111.797 79.2422 111.836 78.9609 111.914 78.6641C111.992 78.3516 112.125 78.0469 112.312 77.75L124.242 58.3906ZM117.094 77.7969H127.688V60.3125L117.094 77.7969ZM154.242 59.5156C153.32 59.5156 152.531 59.6875 151.875 60.0312C151.219 60.375 150.656 60.8516 150.188 61.4609C149.719 62.0703 149.344 62.7812 149.062 63.5938C148.781 64.4062 148.562 65.2812 148.406 66.2188C148.25 67.1562 148.141 68.1328 148.078 69.1484C148.031 70.1641 148.008 71.1719 148.008 72.1719C148.008 73.1719 148.031 74.1797 148.078 75.1953C148.141 76.2109 148.25 77.1875 148.406 78.125C148.562 79.0625 148.781 79.9375 149.062 80.75C149.344 81.5625 149.719 82.2734 150.188 82.8828C150.656 83.4922 151.219 83.9688 151.875 84.3125C152.531 84.6562 153.32 84.8281 154.242 84.8281C155.148 84.8281 155.93 84.6562 156.586 84.3125C157.258 83.9688 157.828 83.4922 158.297 82.8828C158.766 82.2734 159.141 81.5625 159.422 80.75C159.703 79.9375 159.922 79.0625 160.078 78.125C160.234 77.1875 160.336 76.2109 160.383 75.1953C160.445 74.1797 160.477 73.1719 160.477 72.1719C160.477 71.1719 160.445 70.1641 160.383 69.1484C160.336 68.1328 160.234 67.1562 160.078 66.2188C159.922 65.2812 159.703 64.4062 159.422 63.5938C159.141 62.7812 158.766 62.0703 158.297 61.4609C157.828 60.8516 157.258 60.375 156.586 60.0312C155.93 59.6875 155.148 59.5156 154.242 59.5156ZM154.242 55.0625C155.836 55.0625 157.25 55.2812 158.484 55.7188C159.719 56.1406 160.797 56.7344 161.719 57.5C162.641 58.2656 163.414 59.1797 164.039 60.2422C164.68 61.3047 165.195 62.4766 165.586 63.7578C165.977 65.0234 166.258 66.3672 166.43 67.7891C166.602 69.2109 166.688 70.6719 166.688 72.1719C166.688 73.6719 166.602 75.1406 166.43 76.5781C166.258 78 165.977 79.3438 165.586 80.6094C165.195 81.875 164.68 83.0391 164.039 84.1016C163.414 85.1641 162.641 86.0859 161.719 86.8672C160.797 87.6328 159.719 88.2344 158.484 88.6719C157.25 89.0938 155.836 89.3047 154.242 89.3047C152.648 89.3047 151.227 89.0938 149.977 88.6719C148.742 88.2344 147.664 87.6328 146.742 86.8672C145.82 86.0859 145.039 85.1641 144.398 84.1016C143.773 83.0391 143.266 81.875 142.875 80.6094C142.484 79.3438 142.203 78 142.031 76.5781C141.859 75.1406 141.773 73.6719 141.773 72.1719C141.773 70.6719 141.859 69.2109 142.031 67.7891C142.203 66.3672 142.484 65.0234 142.875 63.7578C143.266 62.4766 143.773 61.3047 144.398 60.2422C145.039 59.1797 145.82 58.2656 146.742 57.5C147.664 56.7344 148.742 56.1406 149.977 55.7188C151.211 55.2812 152.633 55.0625 154.242 55.0625ZM181.898 58.3906C182.539 57.2344 183.281 56.4375 184.125 56C184.969 55.5469 185.914 55.3203 186.961 55.3203C187.523 55.3203 188.062 55.3984 188.578 55.5547C189.094 55.7109 189.547 55.9609 189.938 56.3047C190.328 56.6328 190.641 57.0625 190.875 57.5938C191.109 58.125 191.227 58.7656 191.227 59.5156V77.7969H194.062C194.422 77.7969 194.734 77.8594 195 77.9844C195.266 78.1094 195.484 78.2734 195.656 78.4766C195.844 78.6797 195.977 78.9141 196.055 79.1797C196.148 79.4297 196.195 79.6953 196.195 79.9766C196.195 80.2422 196.148 80.5078 196.055 80.7734C195.977 81.0234 195.844 81.25 195.656 81.4531C195.484 81.6562 195.266 81.8203 195 81.9453C194.734 82.0703 194.422 82.1328 194.062 82.1328H191.203V86.375C191.203 86.8281 191.117 87.2266 190.945 87.5703C190.773 87.8984 190.547 88.1797 190.266 88.4141C190 88.6328 189.695 88.8047 189.352 88.9297C189.008 89.0391 188.656 89.0938 188.297 89.0938C187.938 89.0938 187.586 89.0391 187.242 88.9297C186.898 88.8047 186.586 88.6328 186.305 88.4141C186.039 88.1797 185.812 87.8984 185.625 87.5703C185.453 87.2266 185.359 86.8281 185.344 86.375V82.1328H172.406C171.484 82.1328 170.758 81.8828 170.227 81.3828C169.711 80.8672 169.453 80.2422 169.453 79.5078C169.453 79.2422 169.492 78.9609 169.57 78.6641C169.648 78.3516 169.781 78.0469 169.969 77.75L181.898 58.3906ZM174.75 77.7969H185.344V60.3125L174.75 77.7969ZM215.742 59.0469C215.742 58.4531 215.828 57.9297 216 57.4766C216.188 57.0078 216.438 56.6172 216.75 56.3047C217.062 55.9766 217.414 55.7344 217.805 55.5781C218.211 55.4062 218.641 55.3203 219.094 55.3203C219.688 55.3203 220.273 55.4688 220.852 55.7656C221.445 56.0625 221.984 56.5156 222.469 57.125L238.852 80.7266V57.9688C238.852 57.5312 238.93 57.1484 239.086 56.8203C239.242 56.4766 239.445 56.1953 239.695 55.9766C239.961 55.7578 240.258 55.5938 240.586 55.4844C240.93 55.3594 241.273 55.2969 241.617 55.2969C241.961 55.2969 242.297 55.3516 242.625 55.4609C242.953 55.5703 243.242 55.7422 243.492 55.9766C243.758 56.1953 243.969 56.4766 244.125 56.8203C244.281 57.1484 244.359 57.5312 244.359 57.9688V85.2734C244.359 85.8672 244.266 86.3984 244.078 86.8672C243.891 87.3203 243.641 87.7031 243.328 88.0156C243.016 88.3281 242.648 88.5703 242.227 88.7422C241.82 88.9141 241.391 89 240.938 89C240.359 89 239.773 88.8594 239.18 88.5781C238.602 88.2812 238.062 87.8203 237.562 87.1953L221.273 63.7109V86.3516C221.273 86.7891 221.188 87.1719 221.016 87.5C220.859 87.8281 220.648 88.1094 220.383 88.3438C220.133 88.5625 219.836 88.7266 219.492 88.8359C219.164 88.9453 218.828 89 218.484 89C218.141 89 217.805 88.9453 217.477 88.8359C217.148 88.7266 216.852 88.5625 216.586 88.3438C216.336 88.125 216.133 87.8516 215.977 87.5234C215.82 87.1953 215.742 86.8047 215.742 86.3516V59.0469ZM250.055 77.3047C250.055 75.8672 250.305 74.4062 250.805 72.9219C251.305 71.4219 252.062 70.1094 253.078 68.9844C254.094 67.8438 255.367 66.9375 256.898 66.2656C258.445 65.5938 260.258 65.2578 262.336 65.2578C264.414 65.2578 266.219 65.5938 267.75 66.2656C269.297 66.9375 270.578 67.8438 271.594 68.9844C272.625 70.1094 273.391 71.4219 273.891 72.9219C274.391 74.4062 274.641 75.8672 274.641 77.3047C274.641 78.7266 274.391 80.1797 273.891 81.6641C273.391 83.1328 272.625 84.4375 271.594 85.5781C270.578 86.7031 269.297 87.6016 267.75 88.2734C266.219 88.9453 264.414 89.2812 262.336 89.2812C260.258 89.2812 258.445 88.9453 256.898 88.2734C255.367 87.6016 254.094 86.7031 253.078 85.5781C252.062 84.4375 251.305 83.1328 250.805 81.6641C250.305 80.1797 250.055 78.7266 250.055 77.3047ZM255.844 77.3047C255.844 78.2266 255.961 79.2109 256.195 80.2578C256.445 81.2891 256.828 82.2109 257.344 83.0234C257.875 83.8203 258.547 84.4609 259.359 84.9453C260.188 85.4297 261.18 85.6719 262.336 85.6719C263.492 85.6719 264.477 85.4297 265.289 84.9453C266.117 84.4609 266.789 83.8203 267.305 83.0234C267.836 82.2109 268.219 81.2891 268.453 80.2578C268.703 79.2109 268.828 78.2266 268.828 77.3047C268.828 76.3828 268.703 75.4062 268.453 74.375C268.219 73.3281 267.836 72.3984 267.305 71.5859C266.789 70.7734 266.117 70.125 265.289 69.6406C264.477 69.1562 263.492 68.9141 262.336 68.9141C261.18 68.9141 260.188 69.1562 259.359 69.6406C258.547 70.125 257.875 70.7734 257.344 71.5859C256.828 72.3984 256.445 73.3281 256.195 74.375C255.961 75.4062 255.844 76.3828 255.844 77.3047ZM281.812 65.5391L282.258 59.2344C282.289 58.8906 282.383 58.5859 282.539 58.3203C282.711 58.0391 282.922 57.8047 283.172 57.6172C283.422 57.4297 283.695 57.2891 283.992 57.1953C284.289 57.1016 284.586 57.0547 284.883 57.0547C285.445 57.0547 285.945 57.2266 286.383 57.5703C286.82 57.9141 287.039 58.4531 287.039 59.1875V65.5391H290.625C291.266 65.5391 291.75 65.7422 292.078 66.1484C292.406 66.5391 292.57 66.9688 292.57 67.4375C292.57 67.9062 292.406 68.3359 292.078 68.7266C291.766 69.1172 291.281 69.3125 290.625 69.3125H287.039V79.0625C287.039 80.1719 287.055 81.1094 287.086 81.875C287.133 82.6406 287.234 83.2656 287.391 83.75C287.562 84.2188 287.82 84.5625 288.164 84.7812C288.523 84.9844 289.016 85.0859 289.641 85.0859C289.797 85.0859 289.969 85.0781 290.156 85.0625C290.344 85.0469 290.531 85.0312 290.719 85.0156C290.906 84.9844 291.078 84.9609 291.234 84.9453C291.406 84.9297 291.539 84.9219 291.633 84.9219C292.227 84.9219 292.688 85.1172 293.016 85.5078C293.344 85.8984 293.508 86.3359 293.508 86.8203C293.508 87.3203 293.352 87.7266 293.039 88.0391C292.742 88.3516 292.344 88.6016 291.844 88.7891C291.359 88.9766 290.812 89.1016 290.203 89.1641C289.594 89.2422 288.977 89.2812 288.352 89.2812C287.258 89.2812 286.289 89.1406 285.445 88.8594C284.602 88.5781 283.891 88.1172 283.312 87.4766C282.734 86.8203 282.289 85.9609 281.977 84.8984C281.68 83.8359 281.531 82.5312 281.531 80.9844V69.3125H279.258C278.602 69.3125 278.109 69.1172 277.781 68.7266C277.469 68.3359 277.312 67.9062 277.312 67.4375C277.312 66.9688 277.477 66.5391 277.805 66.1484C278.133 65.7422 278.625 65.5391 279.281 65.5391H281.812ZM312.328 58.3906C312.328 57.9531 312.406 57.5469 312.562 57.1719C312.734 56.7812 312.961 56.4531 313.242 56.1875C313.523 55.9062 313.844 55.6875 314.203 55.5312C314.578 55.375 314.969 55.2969 315.375 55.2969H331.547C331.938 55.2969 332.273 55.3672 332.555 55.5078C332.852 55.6328 333.094 55.8047 333.281 56.0234C333.484 56.2422 333.633 56.4922 333.727 56.7734C333.82 57.0391 333.867 57.3203 333.867 57.6172C333.867 57.8984 333.82 58.1797 333.727 58.4609C333.633 58.7422 333.484 58.9922 333.281 59.2109C333.094 59.4297 332.852 59.6094 332.555 59.75C332.273 59.875 331.938 59.9375 331.547 59.9375H318.633V69.2656H330.891C331.281 69.2656 331.617 69.3359 331.898 69.4766C332.195 69.6016 332.438 69.7734 332.625 69.9922C332.828 70.2109 332.977 70.4609 333.07 70.7422C333.164 71.0234 333.211 71.3047 333.211 71.5859C333.211 71.8828 333.164 72.1719 333.07 72.4531C332.977 72.7344 332.828 72.9844 332.625 73.2031C332.438 73.4219 332.195 73.6016 331.898 73.7422C331.617 73.8672 331.281 73.9297 330.891 73.9297H318.633V85.9766C318.633 86.4766 318.539 86.9219 318.352 87.3125C318.18 87.6875 317.945 88 317.648 88.25C317.352 88.5 317.008 88.6875 316.617 88.8125C316.242 88.9375 315.859 89 315.469 89C315.078 89 314.695 88.9375 314.32 88.8125C313.945 88.6875 313.609 88.5 313.312 88.25C313.016 88 312.773 87.6875 312.586 87.3125C312.414 86.9219 312.328 86.4766 312.328 85.9766V58.3906ZM336.352 77.3047C336.352 75.8672 336.602 74.4062 337.102 72.9219C337.602 71.4219 338.359 70.1094 339.375 68.9844C340.391 67.8438 341.664 66.9375 343.195 66.2656C344.742 65.5938 346.555 65.2578 348.633 65.2578C350.711 65.2578 352.516 65.5938 354.047 66.2656C355.594 66.9375 356.875 67.8438 357.891 68.9844C358.922 70.1094 359.688 71.4219 360.188 72.9219C360.688 74.4062 360.938 75.8672 360.938 77.3047C360.938 78.7266 360.688 80.1797 360.188 81.6641C359.688 83.1328 358.922 84.4375 357.891 85.5781C356.875 86.7031 355.594 87.6016 354.047 88.2734C352.516 88.9453 350.711 89.2812 348.633 89.2812C346.555 89.2812 344.742 88.9453 343.195 88.2734C341.664 87.6016 340.391 86.7031 339.375 85.5781C338.359 84.4375 337.602 83.1328 337.102 81.6641C336.602 80.1797 336.352 78.7266 336.352 77.3047ZM342.141 77.3047C342.141 78.2266 342.258 79.2109 342.492 80.2578C342.742 81.2891 343.125 82.2109 343.641 83.0234C344.172 83.8203 344.844 84.4609 345.656 84.9453C346.484 85.4297 347.477 85.6719 348.633 85.6719C349.789 85.6719 350.773 85.4297 351.586 84.9453C352.414 84.4609 353.086 83.8203 353.602 83.0234C354.133 82.2109 354.516 81.2891 354.75 80.2578C355 79.2109 355.125 78.2266 355.125 77.3047C355.125 76.3828 355 75.4062 354.75 74.375C354.516 73.3281 354.133 72.3984 353.602 71.5859C353.086 70.7734 352.414 70.125 351.586 69.6406C350.773 69.1562 349.789 68.9141 348.633 68.9141C347.477 68.9141 346.484 69.1562 345.656 69.6406C344.844 70.125 344.172 70.7734 343.641 71.5859C343.125 72.3984 342.742 73.3281 342.492 74.375C342.258 75.4062 342.141 76.3828 342.141 77.3047ZM387.609 86.375C387.609 86.8125 387.531 87.1953 387.375 87.5234C387.219 87.8516 387.008 88.125 386.742 88.3438C386.492 88.5625 386.195 88.7266 385.852 88.8359C385.523 88.9453 385.188 89 384.844 89C384.516 89 384.188 88.9531 383.859 88.8594C383.547 88.75 383.258 88.5938 382.992 88.3906C382.742 88.1719 382.539 87.9141 382.383 87.6172C382.227 87.3047 382.141 86.9375 382.125 86.5156V84.7578C381.812 85.3359 381.383 85.9219 380.836 86.5156C380.289 87.1094 379.664 87.6172 378.961 88.0391C378.258 88.4453 377.5 88.7578 376.688 88.9766C375.891 89.1797 375.086 89.2812 374.273 89.2812C373.18 89.2812 372.133 89.1094 371.133 88.7656C370.133 88.4062 369.25 87.8594 368.484 87.125C367.734 86.3906 367.133 85.4609 366.68 84.3359C366.242 83.2109 366.023 81.9062 366.023 80.4219V68.1875C366.023 67.75 366.102 67.3672 366.258 67.0391C366.414 66.7109 366.617 66.4375 366.867 66.2188C367.133 65.9844 367.43 65.8125 367.758 65.7031C368.086 65.5938 368.422 65.5391 368.766 65.5391C369.109 65.5391 369.445 65.5938 369.773 65.7031C370.117 65.8125 370.414 65.9844 370.664 66.2188C370.93 66.4375 371.141 66.7109 371.297 67.0391C371.453 67.3672 371.531 67.75 371.531 68.1875V80.5156C371.531 81.3438 371.656 82.0859 371.906 82.7422C372.156 83.3984 372.492 83.9453 372.914 84.3828C373.336 84.8203 373.828 85.1484 374.391 85.3672C374.953 85.5703 375.539 85.6719 376.148 85.6719C376.93 85.6719 377.672 85.5547 378.375 85.3203C379.078 85.0703 379.695 84.7031 380.227 84.2188C380.758 83.7188 381.188 83.1484 381.516 82.5078C381.859 81.8516 382.062 81.0234 382.125 80.0234V68.1641C382.125 67.7266 382.203 67.3438 382.359 67.0156C382.516 66.6875 382.719 66.4141 382.969 66.1953C383.234 65.9766 383.531 65.8125 383.859 65.7031C384.188 65.5938 384.523 65.5391 384.867 65.5391C385.211 65.5391 385.547 65.5938 385.875 65.7031C386.203 65.8125 386.492 65.9766 386.742 66.1953C387.008 66.4141 387.219 66.6875 387.375 67.0156C387.531 67.3438 387.609 67.7266 387.609 68.1641V86.375ZM394.055 68.1172C394.055 67.6953 394.133 67.3203 394.289 66.9922C394.445 66.6641 394.648 66.3984 394.898 66.1953C395.164 65.9766 395.461 65.8125 395.789 65.7031C396.133 65.5938 396.477 65.5391 396.82 65.5391C397.164 65.5391 397.492 65.5938 397.805 65.7031C398.133 65.7969 398.422 65.9531 398.672 66.1719C398.938 66.375 399.148 66.6328 399.305 66.9453C399.461 67.2422 399.547 67.6016 399.562 68.0234V69.8516C399.844 69.2734 400.25 68.6797 400.781 68.0703C401.328 67.4609 401.953 66.9531 402.656 66.5469C403.359 66.125 404.117 65.8047 404.93 65.5859C405.742 65.3672 406.57 65.2578 407.414 65.2578C408.508 65.2578 409.547 65.4297 410.531 65.7734C411.531 66.1172 412.406 66.6562 413.156 67.3906C413.922 68.1094 414.523 69.0391 414.961 70.1797C415.414 71.3047 415.641 72.6484 415.641 74.2109V86.3516C415.641 86.7891 415.562 87.1719 415.406 87.5C415.25 87.8281 415.039 88.1094 414.773 88.3438C414.523 88.5625 414.227 88.7266 413.883 88.8359C413.555 88.9453 413.219 89 412.875 89C412.531 89 412.195 88.9453 411.867 88.8359C411.555 88.7266 411.266 88.5625 411 88.3438C410.75 88.1094 410.547 87.8281 410.391 87.5C410.234 87.1719 410.156 86.7891 410.156 86.3516V74.1641C410.156 73.2734 410.031 72.5 409.781 71.8438C409.531 71.1875 409.195 70.6406 408.773 70.2031C408.352 69.7656 407.859 69.4453 407.297 69.2422C406.734 69.0234 406.141 68.9141 405.516 68.9141C404.688 68.9141 403.914 69.0469 403.195 69.3125C402.477 69.5781 401.844 69.9844 401.297 70.5312C400.766 71.0625 400.344 71.6797 400.031 72.3828C399.719 73.0859 399.562 73.9844 399.562 75.0781V86.3516C399.562 86.7891 399.484 87.1719 399.328 87.5C399.172 87.8281 398.961 88.1094 398.695 88.3438C398.445 88.5625 398.148 88.7266 397.805 88.8359C397.477 88.9453 397.141 89 396.797 89C396.453 89 396.117 88.9453 395.789 88.8359C395.461 88.7266 395.164 88.5625 394.898 88.3438C394.648 88.1094 394.445 87.8281 394.289 87.5C394.133 87.1719 394.055 86.7891 394.055 86.3516V68.1172ZM444.258 86.375C444.258 86.8125 444.18 87.1953 444.023 87.5234C443.867 87.8516 443.664 88.125 443.414 88.3438C443.164 88.5625 442.875 88.7266 442.547 88.8359C442.234 88.9453 441.906 89 441.562 89C441.234 89 440.906 88.9531 440.578 88.8594C440.25 88.75 439.953 88.5938 439.688 88.3906C439.438 88.1719 439.227 87.9062 439.055 87.5938C438.883 87.2812 438.781 86.9219 438.75 86.5156V86.2812C438.75 86.1094 438.742 85.9219 438.727 85.7188C438.727 85.5 438.719 85.3125 438.703 85.1562V84.8984C437.672 86.3516 436.469 87.4531 435.094 88.2031C433.719 88.9531 432.195 89.3281 430.523 89.3281C428.914 89.3281 427.508 88.9844 426.305 88.2969C425.102 87.6094 424.094 86.6953 423.281 85.5547C422.484 84.3984 421.883 83.0781 421.477 81.5938C421.07 80.0938 420.867 78.6094 420.867 77.1406C420.867 75.6094 421.078 74.1016 421.5 72.6172C421.922 71.1328 422.539 69.8516 423.352 68.7734C424.18 67.6797 425.203 66.8203 426.422 66.1953C427.641 65.5703 429.047 65.2578 430.641 65.2578C431.438 65.2578 432.234 65.3594 433.031 65.5625C433.828 65.75 434.578 66.0391 435.281 66.4297C436 66.8047 436.656 67.2812 437.25 67.8594C437.844 68.4219 438.344 68.9844 438.75 69.5469V57.8984C438.75 57.4609 438.828 57.0859 438.984 56.7734C439.141 56.4453 439.344 56.1797 439.594 55.9766C439.859 55.7578 440.156 55.5938 440.484 55.4844C440.812 55.375 441.148 55.3203 441.492 55.3203C441.836 55.3203 442.172 55.375 442.5 55.4844C442.844 55.5938 443.141 55.7578 443.391 55.9766C443.656 56.1797 443.867 56.4453 444.023 56.7734C444.18 57.1016 444.258 57.4766 444.258 57.8984V86.375ZM432.492 68.9141C431.352 68.9141 430.398 69.1484 429.633 69.6172C428.883 70.0859 428.273 70.7109 427.805 71.4922C427.352 72.2734 427.023 73.1719 426.82 74.1875C426.633 75.1875 426.539 76.1484 426.539 77.0703C426.539 77.9609 426.617 78.9297 426.773 79.9766C426.93 81.0078 427.219 81.9531 427.641 82.8125C428.062 83.6562 428.641 84.3516 429.375 84.8984C430.109 85.4453 431.055 85.7188 432.211 85.7188C433.477 85.7188 434.523 85.5 435.352 85.0625C436.18 84.6094 436.836 83.9922 437.32 83.2109C437.82 82.4141 438.172 81.5078 438.375 80.4922C438.578 79.4766 438.68 78.2969 438.68 76.9531C438.68 75.75 438.57 74.7031 438.352 73.8125C438.148 72.9062 437.805 72.0781 437.32 71.3281C436.836 70.5781 436.195 69.9922 435.398 69.5703C434.617 69.1328 433.648 68.9141 432.492 68.9141Z"
              fill="#DF1C44"
            />
          </svg>
          <Link href={`/`}>
            <a>return to home</a>
          </Link>
        </div>
      </main>
    </>
  );
}