/* eslint-disable camelcase */
/* eslint-disable max-len */

const MONTH_MAP = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const STATUS_MAP = {
//   completed: "completed",
//   reviewing: "reviewing",
//   initiated: "initiated",
// };

// const RISK_MAP = {
//   major_non_conformity: "major_non_conformity",
//   minor_non_conformity: "minor_non_conformity",
//   note_worthy_effort: "note_worthy_effort",
//   none: "none",
// };

// const BG_COLOR_MAP = {
//   completed: "#E8FAFA",
//   reviewing: "#EDF3FA",
//   incomplete: "#F8F8F8",
//   major_non_conformity: "#F44336",
//   minor_non_conformity: "#FFC107",
//   note_worthy_effort: "#E8FAFA",
// };

// const TEXT_COLOR_MAP = {
//   completed: "#036666",
//   reviewing: "#1E3888",
//   incomplete: "#F8F8F8",
//   major_non_conformity: "#FFFFFF",
//   minor_non_conformity: "#FFFFFF",
//   note_worthy_effort: "#036666",
// };

// const SVG_MAP = {
//   completed: `
//     <div style="font-size: 12px; color: #036666; display: flex;gap:10px align-items: center; justify-content: space-between; width: 100%">
//       <p style="display: flex; align-items: center;">Completed</p>
//       <div style="padding-right: 10px;">
//         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path
//             d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.2197 6.96967L8.75 11.4393L6.78033 9.46967C6.48744 9.17678 6.01256 9.17678 5.71967 9.46967C5.42678 9.76256 5.42678 10.2374 5.71967 10.5303L8.21967 13.0303C8.51256 13.3232 8.98744 13.3232 9.28033 13.0303L14.2803 8.03033C14.5732 7.73744 14.5732 7.26256 14.2803 6.96967C13.9874 6.67678 13.5126 6.67678 13.2197 6.96967Z"
//             fill="#036666"
//           />
//         </svg>
//       </div>
//     </div>
//   `,
//   reviewing: `
//     <div style="display: flex; justify-content: space-between; gap: 10px; align-items: center; width: 100%;">
//       <div><p style="font-size: 12px; color: #1d1d1d; font-weight: 500;">Sent for review</p></div>
//       <div style="padding-right: 10px;">
//         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path
//             d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM8.75 11.4393L13.2197 6.96967C13.5126 6.67678 13.9874 6.67678 14.2803 6.96967C14.5466 7.23594 14.5708 7.6526 14.3529 7.94621L14.2803 8.03033L9.28033 13.0303C9.01406 13.2966 8.5974 13.3208 8.30379 13.1029L8.21967 13.0303L5.71967 10.5303C5.42678 10.2374 5.42678 9.76256 5.71967 9.46967C5.98594 9.2034 6.4026 9.1792 6.69621 9.39705L6.78033 9.46967L8.75 11.4393L13.2197 6.96967L8.75 11.4393Z"
//             fill="#2882D6"
//           />
//         </svg>
//       </div>
//     </div>
//   `,
//   incomplete: `
//     <div style="display: flex; justify-content: space-between; gap: 10px; align-items: center; width: 100%;">
//       <div style="display: flex; flex-direction: column; gap: 2px;">
//         <p style="font-size: 12px; color: #1d1d1d; font-weight: 500;">Incomplete</p>
//         <p style="color: #888888;">Risk not defined</p>
//       </div>
//       <div style="padding-right: 10px;">
//         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path
//             d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM13.4462 6.39705L13.5303 6.46967C13.7966 6.73594 13.8208 7.1526 13.6029 7.44621L13.5303 7.53033L11.061 10L13.5303 12.4697C13.7966 12.7359 13.8208 13.1526 13.6029 13.4462L13.5303 13.5303C13.2641 13.7966 12.8474 13.8208 12.5538 13.6029L12.4697 13.5303L10 11.061L7.53033 13.5303C7.26406 13.7966 6.8474 13.8208 6.55379 13.6029L6.46967 13.5303C6.2034 13.2641 6.1792 12.8474 6.39705 12.5538L6.46967 12.4697L8.939 10L6.46967 7.53033C6.2034 7.26406 6.1792 6.8474 6.39705 6.55379L6.46967 6.46967C6.73594 6.2034 7.1526 6.1792 7.44621 6.39705L7.53033 6.46967L10 8.939L12.4697 6.46967C12.7359 6.2034 13.1526 6.1792 13.4462 6.39705Z"
//             fill="#C3C3C3"
//           />
//         </svg>
//       </div>
//     </div>
//   `,
//   major_non_conformity: `
//     <div style="display: flex; justify-content: space-between; gap: 10px; align-items: center; width: 100%;">
//       <div><p style="font-size: 12px; color: #ffffff; font-weight: 500;">Major Non-Conformity</p></div>
//       <div style="padding-right: 10px;">
//         <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M13.2984 1.12206C13.5335 1.25388 13.6 1.5568 13.4554 1.78423L13.0363 2.44308C12.8916 2.67051 12.5907 2.73597 12.3538 2.60744C11.3985 2.08918 10.334 1.79845 9.24341 1.76105C8.15284 1.72365 7.07085 1.94077 6.08234 2.39236C5.83718 2.50436 5.54145 2.41844 5.41271 2.18164L5.03974 1.49562C4.911 1.25882 4.99809 0.961159 5.24167 0.845765C6.50699 0.246337 7.89962 -0.0429869 9.30362 0.00516226C10.7076 0.0533115 12.0772 0.437362 13.2984 1.12206ZM17.7742 8.29631C17.7891 8.56543 17.5692 8.7841 17.2997 8.7841H15.6404C15.3708 8.7841 15.1543 8.56526 15.133 8.29657C15.0706 7.51192 14.8579 6.74496 14.5051 6.03798C14.1522 5.331 13.6671 4.70004 13.0776 4.17849C12.8757 3.9999 12.8309 3.69534 12.993 3.47994L13.9904 2.1539C14.1525 1.9385 14.4594 1.89421 14.6655 2.06795C15.5794 2.83842 16.3277 3.78851 16.8631 4.86107C17.3984 5.93364 17.7078 7.10283 17.7742 8.29631ZM4.47135 1.83472C4.32429 1.60884 4.02104 1.54385 3.80367 1.70323C2.7599 2.46852 1.89642 3.45632 1.27714 4.59738C0.657864 5.73845 0.300177 7.00076 0.227304 8.29297C0.212128 8.56208 0.431871 8.78093 0.701405 8.78114L1.48226 8.78175C1.75179 8.78196 1.9687 8.56336 1.98761 8.29449C2.05793 7.29474 2.34146 6.31959 2.82131 5.43543C3.30116 4.55127 3.96428 3.78214 4.76422 3.17836C4.97935 3.01598 5.04444 2.71499 4.89738 2.48911L4.47135 1.83472ZM13.3629 5.90969C13.4796 5.8423 13.6288 5.88229 13.6962 5.999C13.7636 6.11571 13.7236 6.26495 13.6069 6.33233L9.94151 8.44855C9.97973 8.55453 10.0006 8.66881 10.0006 8.78796C10.0006 9.3404 9.55272 9.78824 9.00028 9.78824C8.44784 9.78824 8 9.3404 8 8.78796C8 8.23552 8.44784 7.78768 9.00028 7.78768C9.25682 7.78768 9.4908 7.88425 9.66785 8.04302L13.3629 5.90969Z"
//             fill="white"
//           />
//         </svg>
//       </div>
//     </div>
//   `,
//   minor_non_conformity: `
//     <div style="display: flex; justify-content: space-between; gap: 10px; align-items: center; width: 100%;">
//       <div><p style="font-size: 12px; color: #ffffff; font-weight: 500;">Minor Non-Conformity</p></div>
//       <div style="padding-right: 10px;">
//         <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M13.2984 1.12206C13.5335 1.25388 13.6 1.5568 13.4554 1.78423L13.0363 2.44308C12.8916 2.67051 12.5907 2.73597 12.3538 2.60744C11.3985 2.08918 10.334 1.79845 9.24341 1.76105C8.15284 1.72365 7.07085 1.94077 6.08234 2.39236C5.83718 2.50436 5.54145 2.41844 5.41271 2.18164L5.03974 1.49562C4.911 1.25882 4.99809 0.961159 5.24167 0.845765C6.50699 0.246337 7.89962 -0.0429869 9.30362 0.00516226C10.7076 0.0533115 12.0772 0.437362 13.2984 1.12206ZM17.7734 8.29631C17.7883 8.56543 17.5684 8.7841 17.2989 8.7841H16.518C16.2485 8.7841 16.0318 8.56534 16.0131 8.29645C15.949 7.37551 15.704 6.47453 15.2903 5.64568C14.8766 4.81683 14.3039 4.07941 13.6064 3.47461C13.4028 3.29803 13.3582 2.99332 13.5203 2.77792L13.9897 2.1539C14.1517 1.9385 14.4586 1.89421 14.6647 2.06795C15.5786 2.83842 16.327 3.78851 16.8623 4.86107C17.3976 5.93364 17.707 7.10283 17.7734 8.29631ZM4.47135 1.83472C4.32429 1.60884 4.02104 1.54385 3.80367 1.70323C2.7599 2.46852 1.89642 3.45632 1.27714 4.59738C0.657864 5.73845 0.300177 7.00076 0.227304 8.29297C0.212128 8.56208 0.431871 8.78093 0.701405 8.78114L2.36072 8.78244C2.63025 8.78265 2.84691 8.56397 2.86849 8.2953C2.93704 7.44181 3.18326 6.61015 3.59339 5.85445C4.00352 5.09876 4.56667 4.43909 5.24494 3.91651C5.45845 3.75201 5.52373 3.45118 5.37667 3.2253L4.47135 1.83472ZM4.53603 5.83858C4.41996 5.7701 4.27035 5.80867 4.20186 5.92474C4.13338 6.04081 4.17195 6.19042 4.28802 6.2589L8.04814 8.47751C8.01634 8.57514 7.99914 8.67936 7.99914 8.78759C7.99914 9.34004 8.44699 9.78788 8.99943 9.78788C9.55187 9.78788 9.99971 9.34004 9.99971 8.78759C9.99971 8.23515 9.55187 7.78731 8.99943 7.78731C8.73138 7.78731 8.48796 7.89275 8.30837 8.0644L4.53603 5.83858Z"
//             fill="white"
//           />
//         </svg>
//       </div>
//     </div>
//   `,
//   note_worthy_effort: `
//     <div style="display: flex; justify-content: space-between; gap: 10px; align-items: center; width: 100%;">
//       <div><p style="font-size: 12px; color: #036666; width: 80%; font-weight: 500;">Note Worthy Effort</p></div>
//       <div style="padding-right: 10px;">
//         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path
//             d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM6.55808 4.16675C6.87219 3.27806 8.12885 3.27764 8.44354 4.16614L8.90202 5.46063C9.00778 5.75924 9.24272 5.99415 9.54135 6.09988L10.8349 6.55782C11.7233 6.87235 11.7232 8.12877 10.8348 8.4432L9.54151 8.90088C9.24279 9.00659 9.0078 9.24155 8.90203 9.54025L8.44357 10.835C8.12893 11.7236 6.87212 11.7232 6.55805 10.8344L6.10101 9.541C5.99532 9.24189 5.76007 9.00661 5.46098 8.90087L4.16669 8.44331C3.27783 8.12907 3.27775 6.87205 4.16658 6.55771L5.46113 6.09988C5.76014 5.99414 5.99533 5.7589 6.10102 5.45988L6.55808 4.16675ZM13.9486 10.7058L14.1277 11.3033C14.2098 11.5772 14.4239 11.7914 14.6977 11.8735L15.2956 12.0528C16.2364 12.335 16.2364 13.6672 15.2957 13.9494L14.6977 14.1287C14.424 14.2108 14.2098 14.4251 14.1277 14.6989L13.9487 15.2962C13.6668 16.2371 12.3344 16.2374 12.0522 15.2966L11.8724 14.6975C11.7902 14.4237 11.5759 14.2095 11.3019 14.1275L10.7062 13.9492C9.76496 13.6676 9.76448 12.3349 10.7055 12.0525L11.3026 11.8734C11.5762 11.7913 11.7902 11.5773 11.8724 11.3037L12.0521 10.7052C12.3346 9.76463 13.6667 9.76502 13.9486 10.7058Z"
//             fill="#4CAF50"
//           />
//         </svg>
//       </div>
//     </div>
//   `,
// };

class AuditTemplates {
  /** @type {AuditTemplates} */
  static instance = null;

  static getInstance() {
    if (!AuditTemplates.instance) {
      AuditTemplates.instance = new AuditTemplates();
    }
    return AuditTemplates.instance;
  }

  #getAuditReportDate = (isoDate) => {
    const date = new Date(isoDate);
    return `${MONTH_MAP[
      date.getUTCMonth()
    ].toUpperCase()} ${date.getUTCFullYear()}`;
  };
  #extractStatusFromTask = (status, risk) => {
    const statusMap = {
      completed: "completed",
      reviewing: "reviewing",
      initiated: "initiated",
    }[status];

    const riskMap = {
      major_non_conformity: "major_non_conformity",
      minor_non_conformity: "minor_non_conformity",
      note_worthy_effort: "note_worthy_effort",
      none: "none",
    }[risk];

    if (statusMap === "initiated" && riskMap === "none") {
      return "incomplete";
    }

    if (statusMap !== "completed" || statusMap === "reviewing") {
      return riskMap;
    }

    return statusMap;
  };

  #getBgColorForTask = (status, risk) => {
    const key = this.#extractStatusFromTask(status, risk);

    const statusMap = {
      completed: "#E8FAFA",
      reviewing: "#EDF3FA",
      incomplete: "#F8F8F8",
      major_non_conformity: "#F44336",
      minor_non_conformity: "#FFC107",
      note_worthy_effort: "#E8FAFA",
    };

    return statusMap[key];
  };

  #getColorForTask = (status, risk) => {
    const key = this.#extractStatusFromTask(status, risk);

    const statusMap = {
      completed: "#036666",
      reviewing: "#1E3888",
      incomplete: "#F8F8F8",
      major_non_conformity: "#FFFFFF",
      minor_non_conformity: "#FFFFFF",
      note_worthy_effort: "#036666",
    };

    return statusMap[key];
  };

  #getSvgForTask = (status, risk) => {
    const key = this.#extractStatusFromTask(status, risk);

    const statusMap = {
      completed: `<div style='font-size: 12px; color: #036666; display: flex;gap:10px align-items: center; justify-content: space-between; width: 100%'><p style='display:flex;align-items: center;'>Completed</p> <div style='padding-right:10px;'> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.2197 6.96967L8.75 11.4393L6.78033 9.46967C6.48744 9.17678 6.01256 9.17678 5.71967 9.46967C5.42678 9.76256 5.42678 10.2374 5.71967 10.5303L8.21967 13.0303C8.51256 13.3232 8.98744 13.3232 9.28033 13.0303L14.2803 8.03033C14.5732 7.73744 14.5732 7.26256 14.2803 6.96967C13.9874 6.67678 13.5126 6.67678 13.2197 6.96967Z" fill="#036666"/>
                    </svg></div>
                  </div>`,
      reviewing: `<div style='display: flex; justify-content: space-between;gap:10px; align-items: center; width:100%'><div><p style='font-size: 12px; color:#1D1D1D; font-weight: 500;'>Sent for review</p></div><div  style='padding-right:10px;' ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM8.75 11.4393L13.2197 6.96967C13.5126 6.67678 13.9874 6.67678 14.2803 6.96967C14.5466 7.23594 14.5708 7.6526 14.3529 7.94621L14.2803 8.03033L9.28033 13.0303C9.01406 13.2966 8.5974 13.3208 8.30379 13.1029L8.21967 13.0303L5.71967 10.5303C5.42678 10.2374 5.42678 9.76256 5.71967 9.46967C5.98594 9.2034 6.4026 9.1792 6.69621 9.39705L6.78033 9.46967L8.75 11.4393L13.2197 6.96967L8.75 11.4393Z" fill="#2882D6"/>
</svg>
</div></div>`,
      incomplete: `<div style='display: flex; justify-content: space-between;gap:10px; align-items: center; width:100%'><div style=' display:flex;flex-direction:column;gap:2px;'><p style='font-size: 12px; color:#1D1D1D; font-weight: 500;'>Incomplete</p><p style='color:#888888;' >Risk not defined</p></div><div style='padding-right:10px;'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM13.4462 6.39705L13.5303 6.46967C13.7966 6.73594 13.8208 7.1526 13.6029 7.44621L13.5303 7.53033L11.061 10L13.5303 12.4697C13.7966 12.7359 13.8208 13.1526 13.6029 13.4462L13.5303 13.5303C13.2641 13.7966 12.8474 13.8208 12.5538 13.6029L12.4697 13.5303L10 11.061L7.53033 13.5303C7.26406 13.7966 6.8474 13.8208 6.55379 13.6029L6.46967 13.5303C6.2034 13.2641 6.1792 12.8474 6.39705 12.5538L6.46967 12.4697L8.939 10L6.46967 7.53033C6.2034 7.26406 6.1792 6.8474 6.39705 6.55379L6.46967 6.46967C6.73594 6.2034 7.1526 6.1792 7.44621 6.39705L7.53033 6.46967L10 8.939L12.4697 6.46967C12.7359 6.2034 13.1526 6.1792 13.4462 6.39705Z" fill="#C3C3C3"/>
</svg>

    </svg></div></div>`,
      major_non_conformity: `<div style='display: flex; justify-content: space-between; gap:10px; align-items: center; width:100%'><div><p style='font-size: 12px; color:#FFFFFF; font-weight: 500;'>Major Non-Conformity </p></div><div style='padding-right: 10px'><svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2984 1.12206C13.5335 1.25388 13.6 1.5568 13.4554 1.78423L13.0363 2.44308C12.8916 2.67051 12.5907 2.73597 12.3538 2.60744C11.3985 2.08918 10.334 1.79845 9.24341 1.76105C8.15284 1.72365 7.07085 1.94077 6.08234 2.39236C5.83718 2.50436 5.54145 2.41844 5.41271 2.18164L5.03974 1.49562C4.911 1.25882 4.99809 0.961159 5.24167 0.845765C6.50699 0.246337 7.89962 -0.0429869 9.30362 0.00516226C10.7076 0.0533115 12.0772 0.437362 13.2984 1.12206ZM17.7742 8.29631C17.7891 8.56543 17.5692 8.7841 17.2997 8.7841H15.6404C15.3708 8.7841 15.1543 8.56526 15.133 8.29657C15.0706 7.51192 14.8579 6.74496 14.5051 6.03798C14.1522 5.331 13.6671 4.70004 13.0776 4.17849C12.8757 3.9999 12.8309 3.69534 12.993 3.47994L13.9904 2.1539C14.1525 1.9385 14.4594 1.89421 14.6655 2.06795C15.5794 2.83842 16.3277 3.78851 16.8631 4.86107C17.3984 5.93364 17.7078 7.10283 17.7742 8.29631ZM4.47135 1.83472C4.32429 1.60884 4.02104 1.54385 3.80367 1.70323C2.7599 2.46852 1.89642 3.45632 1.27714 4.59738C0.657864 5.73845 0.300177 7.00076 0.227304 8.29297C0.212128 8.56208 0.431871 8.78093 0.701405 8.78114L1.48226 8.78175C1.75179 8.78196 1.9687 8.56336 1.98761 8.29449C2.05793 7.29474 2.34146 6.31959 2.82131 5.43543C3.30116 4.55127 3.96428 3.78214 4.76422 3.17836C4.97935 3.01598 5.04444 2.71499 4.89738 2.48911L4.47135 1.83472ZM13.3629 5.90969C13.4796 5.8423 13.6288 5.88229 13.6962 5.999C13.7636 6.11571 13.7236 6.26495 13.6069 6.33233L9.94151 8.44855C9.97973 8.55453 10.0006 8.66881 10.0006 8.78796C10.0006 9.3404 9.55272 9.78824 9.00028 9.78824C8.44784 9.78824 8 9.3404 8 8.78796C8 8.23552 8.44784 7.78768 9.00028 7.78768C9.25682 7.78768 9.4908 7.88425 9.66785 8.04302L13.3629 5.90969Z" fill="white"/>
</svg>
</div></div>`,
      minor_non_conformity: `<div style='display: flex; justify-content: space-between; gap:10px; align-items: center; width:100%'><div><p style='font-size: 12px; color:#FFFFFF; font-weight: 500;'>Minor Non-Conformity</p></div><div style='padding-right: 10px'><svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2984 1.12206C13.5335 1.25388 13.6 1.5568 13.4554 1.78423L13.0363 2.44308C12.8916 2.67051 12.5907 2.73597 12.3538 2.60744C11.3985 2.08918 10.334 1.79845 9.24341 1.76105C8.15284 1.72365 7.07085 1.94077 6.08234 2.39236C5.83718 2.50436 5.54145 2.41844 5.41271 2.18164L5.03974 1.49562C4.911 1.25882 4.99809 0.961159 5.24167 0.845765C6.50699 0.246337 7.89962 -0.0429869 9.30362 0.00516226C10.7076 0.0533115 12.0772 0.437362 13.2984 1.12206ZM17.7734 8.29631C17.7883 8.56543 17.5684 8.7841 17.2989 8.7841H16.518C16.2485 8.7841 16.0318 8.56534 16.0131 8.29645C15.949 7.37551 15.704 6.47453 15.2903 5.64568C14.8766 4.81683 14.3039 4.07941 13.6064 3.47461C13.4028 3.29803 13.3582 2.99332 13.5203 2.77792L13.9897 2.1539C14.1517 1.9385 14.4586 1.89421 14.6647 2.06795C15.5786 2.83842 16.327 3.78851 16.8623 4.86107C17.3976 5.93364 17.707 7.10283 17.7734 8.29631ZM4.47135 1.83472C4.32429 1.60884 4.02104 1.54385 3.80367 1.70323C2.7599 2.46852 1.89642 3.45632 1.27714 4.59738C0.657864 5.73845 0.300177 7.00076 0.227304 8.29297C0.212128 8.56208 0.431871 8.78093 0.701405 8.78114L2.36072 8.78244C2.63025 8.78265 2.84691 8.56397 2.86849 8.2953C2.93704 7.44181 3.18326 6.61015 3.59339 5.85445C4.00352 5.09876 4.56667 4.43909 5.24494 3.91651C5.45845 3.75201 5.52373 3.45118 5.37667 3.2253L4.47135 1.83472ZM4.53603 5.83858C4.41996 5.7701 4.27035 5.80867 4.20186 5.92474C4.13338 6.04081 4.17195 6.19042 4.28802 6.2589L8.04814 8.47751C8.01634 8.57514 7.99914 8.67936 7.99914 8.78759C7.99914 9.34004 8.44699 9.78788 8.99943 9.78788C9.55187 9.78788 9.99971 9.34004 9.99971 8.78759C9.99971 8.23515 9.55187 7.78731 8.99943 7.78731C8.73138 7.78731 8.48796 7.89275 8.30837 8.0644L4.53603 5.83858Z" fill="white"/>
</svg>

</div></div>`,
      note_worthy_effort: `<div style='display: flex; justify-content: space-between; gap:10px; align-items: center; width:100%'><div><p style='font-size: 12px; color:#036666; width:80%; font-weight: 500;'>Note Worthy Effort</p></div><div style='padding-right: 10px'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM6.55808 4.16675C6.87219 3.27806 8.12885 3.27764 8.44354 4.16614L8.90202 5.46063C9.00778 5.75924 9.24272 5.99415 9.54135 6.09988L10.8349 6.55782C11.7233 6.87235 11.7232 8.12877 10.8348 8.4432L9.54151 8.90088C9.24279 9.00659 9.0078 9.24155 8.90203 9.54025L8.44357 10.835C8.12893 11.7236 6.87212 11.7232 6.55805 10.8344L6.10101 9.541C5.99532 9.24189 5.76007 9.00661 5.46098 8.90087L4.16669 8.44331C3.27783 8.12907 3.27775 6.87205 4.16658 6.55771L5.46113 6.09988C5.76014 5.99414 5.99533 5.7589 6.10102 5.45988L6.55808 4.16675ZM13.9486 10.7058L14.1277 11.3033C14.2098 11.5772 14.4239 11.7914 14.6977 11.8735L15.2956 12.0528C16.2364 12.335 16.2364 13.6672 15.2957 13.9494L14.6977 14.1287C14.424 14.2108 14.2098 14.4251 14.1277 14.6989L13.9487 15.2962C13.6668 16.2371 12.3344 16.2374 12.0522 15.2966L11.8724 14.6975C11.7902 14.4237 11.5759 14.2095 11.3019 14.1275L10.7062 13.9492C9.76496 13.6676 9.76448 12.3349 10.7055 12.0525L11.3026 11.8734C11.5762 11.7913 11.7902 11.5773 11.8724 11.3037L12.0521 10.7052C12.3346 9.76463 13.6667 9.76502 13.9486 10.7058Z" fill="#4CAF50"/>
</svg>


</div></div>`,
    };

    return statusMap[key];
  };

  #getHeaders = ({ audit, organization }) => {
    return {
      audit: [
        { name: "Audit name", value: audit.name },
        {
          name: "Audit location",
          value: audit.locations.map(
            (location) =>
              `${location.addressLine1}, ${location.city}, ${location.state} ${location.country}/n`
          ),
        },
        { name: "Audit start date", value: audit.createdAt },
        { name: "Audit end date", value: audit.createdAt },
        {
          name: "Audit platform",
          value: "UNIFIED CONTROL FRAMEWORK FOUNDATION",
        },
        { name: "Audit platform URL", value: "www.ucfportal.com" },
      ],
      organization: [
        { name: "Company name", value: organization.name },
        { name: "Vertical", value: organization.vertical.name },
        { name: "Company URL", value: organization.url },
        { name: "Company admin", value: organization.admin.name },
        { name: "Phone no", value: organization.admin.phone },
        { name: "Email", value: organization.admin.email },
      ],
      auditor: [
        { name: "Auditor name", value: audit.creator.name },
        { name: "Phone no", value: audit.creator.phone },
        { name: "Email", value: audit.creator.email },
      ],
    };
  };

  #formattedText = (text) => {
    const segments = text.split("**");
    return `<span>${segments
      .map((segment) => `<span>${segment.trim()}</span>`)
      .join("<br />")}</span>`;
  };

  #getTaskPercentage = (totalTask, completedTask) => {
    return Math.round((completedTask / totalTask) * 100);
  };

  /**
   * Generate body template for audit report
   */
  generateBodyTemplateForAuditReport = ({
    organization,
    domains,
    audit,
    risks,
  }) => {
    console.log({
      organization,
      domains,
      audit,
      risks,
    });

    const areas = domains.flatMap((domain) => domain.areas);
    const headers = this.#getHeaders({ audit, organization });

    return /*html*/ `
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${audit.name}</title>
        <link rel="stylesheet" href="styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
        <style>
          * {
            margin: 0px;
            padding: 0px;
          }
          body {
            font-family: "Inter", sans-serif;
          }
          @page: first{
            margin-top: 0;
          };
          #report_footer {
            display: none;
          }
          .domain-title {
            font-size: 20px;
            color: #1d1d1d;
            font-weight: 700;
            margin-bottom: 20px;
          }
          .area-title {
            font-size: 14px;
            color: #333;
            padding: 12px 0px;
            font-weight: 600;
          }
          .control-container {
            display: flex;
            flex-direction: row;
            font-weight: 500;
          }
          .control-info {
            width: 20%;
            padding: 10px;
            border-right: 1px solid #e1e1e1;
            border-bottom: 1px solid #e1e1e1;
          }
          .control-info .control-id {
            font-size: 12px;
            color: #888;
          }
          .control-id {
            margin-bottom: 2px;
          }
          .control-info .control-details {
            font-size: 10px;
            color: #1d1d1d;
          }
          .control-container-parent:first-child {
            border-top: 1px solid red;
          }
          .control-header {
            display: flex;
            align-items: center;
            background-color: #f6f9fc;
            font-weight: 600;
            color: #1d1d1d;
            font-size: 12px;
            padding: 10px 0px;
            margin-top: 10px;
          }
          .control-header > div {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: 10px;
          }
          .tasks-container {
            width: 80%;
            border-bottom: 1px solid #e1e1e1;
            display: flex;
            flex-direction: column;
          }
          .task-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            border-bottom: 1px solid #e1e1e1;
            flex-grow: 1;
          }
          .task-cell {
            border-right: 1px solid #e1e1e1;
            padding: 10px;
            font-size: 10px;
            color: #1d1d1d;
          }
          .task-cell:last-child {
            border-right: none;
          }
          .task-title {
            font-size: 12px;
            color: #888;
            margin-bottom: 2px;
          }
          .toc-title {
            padding-bottom: 20px;
            font-weight: 700;
            color: #1d1d1d;
            font-size: 24px;
          }
          .toc-columns {
            column-count: 2;
            column-gap: 40px;
            column-fill: auto;
            // height: calc(100vh - 120px);
          }
          .toc-entry {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .toc-entry-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
            border-bottom: 0.5px solid #e1e1e1;
            min-width: 0;
          }
          .toc-text {
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .toc-page {
            margin: 0;
            margin-left: 8px;
            flex-shrink: 0;
          }
          .level-1 {
            font-size: 14px;
            line-height: 14px;
            font-weight: 600;
            color: #1d1d1d;
          }
          .level-2 {
            font-size: 14px;
            line-height: 14px;
            font-weight: 600;
            color: #4a4a4a;
            margin-left: 20px;
          }
          .level-3 {
            font-size: 14px;
            line-height: 14px;
            font-weight: 500;
            color: #4a4a4a;
            margin-left: 40px;
          }
          .toc-page.level-1 {
            font-size: 18px;
            font-weight: 700;
          }
          .toc-page.level-2,
          .toc-page.level-3 {
            font-size: 18px;
            font-weight: 700;
          }
        </style>
      </head>

    <body>

    <!-- -------------------------------------- Cover Page --------------------------------------  -->
        <div style="position: relative; height: 100%;">
          <div style="padding: 60px 80px 40px 80px;">
              <div style="display: flex; align-items: center; gap: 11.5px;">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="35" viewBox="0 0 28 35" fill="none">
                      <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.23234 9.78933V3.87932C9.38189 0.0961976 15.6067 0.877254 15.6067 0.877254V5.77088C7.99908 4.82511 5.23234 9.78933 5.23234 9.78933ZM0.0772186 5.57598L5.13132 9.76184V21.4517L5.13066 21.4637C5.08576 22.2988 5.12482 23.9627 6.12515 25.5748C6.72663 26.5435 7.57817 27.3349 8.59507 27.9105L8.57259 25.2518L8.51039 17.8984L8.50997 17.8484L8.51127 17.7983C8.64743 12.544 12.9455 8.35437 18.2023 8.35437H21.5999V14.1815H18.2023C16.1201 14.1815 14.4143 15.8296 14.3377 17.9061L14.3994 25.2025L14.4311 28.9422C14.9275 28.9061 15.5906 28.8203 16.3178 28.6252C17.7802 28.2329 19.4629 27.4096 20.5947 25.6973C21.3157 24.6059 21.4739 23.3289 21.7042 21.4696L21.7363 21.2106C22.0022 19.0734 21.9132 17.2889 21.7891 16.0913L21.7402 15.62L26.8591 15.3754L26.9031 15.7969C27.0192 16.9083 27.1238 18.5068 27.026 20.4226L27.0235 20.4703C26.9173 22.5371 26.7706 25.3921 25.7265 27.6058C24.7028 29.774 22.777 31.4339 20.5419 32.5408C18.3051 33.6484 15.7253 34.2198 13.3394 34.1885C8.53655 34.1255 2.88627 31.6145 0.806912 26.8151C0.645068 26.441 0.513492 26.0746 0.407753 25.721C0.118969 24.7532 -0.00452624 23.7493 0.000126546 22.7521L0.0772186 5.57598Z"
                          fill="#036666"
                      />
                    </svg>
                </div>
                <div style="width: 94px; height: 39px; font-size: 9.605px; color: #888888; font-weight: 500;">
                    UNIFIED CONTROLS FRAMEWORK FOUNDATION
                </div>
              </div>
              <div style="margin-top: 32px; font-size: 64px; font-weight: 700;">
                <div style="color: #036666; z-index: 200;">${audit.name}</div>
                <div style="color: #1d1d1d; z-index: 200;">Audit Report</div>
              </div>
              <div style="margin-top: 8px; font-size: 16px; font-weight: 600; color: #888888;">
                ${this.#getAuditReportDate(audit.createdAt)}
              </div>
          </div>
          <div style="position: absolute; top: 0; right: 0; z-index: -1;">
              <svg width="600" height="840" viewBox="0 0 364 594" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M93.3906 159.658V54.5681C167.331 -12.7023 278.252 1.18616 278.252 1.18616V88.2033C142.691 71.3857 93.3906 159.658 93.3906 159.658ZM1.51658 84.7287L91.5754 159.161V367.026L91.5638 367.24C90.7636 382.09 91.4597 411.676 109.284 440.341C119.798 457.24 134.599 471.102 152.263 481.285L151.867 434.609L150.759 303.854L150.751 302.942L150.775 302.03C153.22 207.871 230.372 132.972 324.512 132.972H385.054V238.911H324.512C287.886 238.911 258.056 267.807 256.703 303.998L257.802 433.711L258.365 500.139C267.081 499.452 278.469 497.914 290.908 494.584C316.965 487.608 346.949 472.969 367.117 442.52C379.965 423.113 382.783 400.405 386.887 367.345C387.074 365.832 387.265 364.296 387.459 362.739C392.198 324.736 390.611 293.005 388.399 271.71L387.528 263.329L478.742 258.981L479.526 266.474C481.594 286.238 483.459 314.66 481.716 348.727L481.715 348.73L481.672 349.576C479.779 386.327 477.165 437.094 458.559 476.458L458.557 476.461C440.316 515.015 406.003 544.527 366.175 564.209C326.319 583.904 280.35 594.065 237.835 593.51C152.253 592.389 51.5709 547.739 14.519 462.398L14.5172 462.394C11.6334 455.741 9.29052 449.23 7.40637 442.941L7.40514 442.937C2.25929 425.729 0.059972 407.882 0.14288 390.15L1.51658 84.7287Z"
                    fill="#F4FCFC"
                />
              </svg>
          </div>
          <div style="padding: 80px; background-color: #f4fcfc; position: absolute; bottom: 0; left: 0; right: 0; z-index: 99999 !important;">
              <div style="display: flex; align-items: center;">
                <div style="width: 100%;">
                    <div style="font-size: 12px; color: #888; font-weight: 500; margin-bottom: 10px;">ORGANIZATION</div>
                    <div style="font-size: 18px; color: #1d1d1d; font-weight: 600;">${
                      organization.name
                    }</div>
                </div>
                <div style="width: 100%;">
                    <div style="font-size: 12px; color: #888; font-weight: 500; margin-bottom: 10px;">AUDITOR</div>
                    <div style="font-size: 18px; color: #1d1d1d; font-weight: 600;">${
                      audit.creator.name
                    }</div>
                </div>
              </div>
          </div>
        </div>
    <!-- -------------------------------------- End Of Cover Page --------------------------------------  -->


    <!-- -------------------------------------- Table Of Contents --------------------------------------  -->
        <div style="padding: 0px 20px; min-height: 100vh">
          <div id="heading" class="domain-title">Table of contents</div>
          <div id="toc-columns" class="toc-columns"></div>
        </div>
    <!-- ---------------------------------- End Of Table Of Contents -----------------------------------  -->


    <!-- ---------------------------------------- Audit Details ----------------------------------------  -->
        <div style="padding: 0px 20px; min-height: 100vh;">
          <h1 id="heading" class="domain-title">1. Audit details</h1>
          <div style="display: flex; gap: 16px; width: 100%; font-weight: 500;">
              <div style="width: 100%;">
                <div style="background-color: #f6f9fc; padding: 10px; font-size: 14px; font-weight: 600; color: #1d1d1d;">Audit info</div>
                <div>
                    ${headers.audit
                      .map(
                        (auditDetails) => `
                    <div style="padding: 8px 12px; font-size: 10px;">
                      <p style="color: #888; margin-bottom: 4px;">${
                        auditDetails.name
                      }</p>
                      <p style="color: #1d1d1d;">${
                        auditDetails.value || "NA"
                      }</p>
                    </div>
                    `
                      )
                      .join("")}
                </div>
              </div>
              <div style="width: 100%;">
                <div style="background-color: #f6f9fc; padding: 10px; font-size: 14px; font-weight: 600; color: #1d1d1d;">Organization details</div>
                <div>
                    ${headers.organization
                      .map(
                        (auditDetails) => /*html*/ `
                            <div style="padding: 8px 12px; font-size: 10px;">
                              <p style="color: #888; margin-bottom: 4px;">${
                                auditDetails.name
                              }</p>
                              <p style="color: #1d1d1d;">${
                                auditDetails.value || "NA"
                              }</p>
                            </div>
                            `
                      )
                      .join("")}
                </div>
              </div>
              <div style="width: 100%;">
                <div style="background-color: #f6f9fc; padding: 10px; font-size: 14px; font-weight: 600; color: #1d1d1d;">Auditor details</div>
                <div>
                    ${headers.auditor
                      .map(
                        (auditDetails) => /*html*/ `
                        <div style="padding: 8px 12px; font-size: 10px;">
                          <p style="color: #888; margin-bottom: 4px;">${
                            auditDetails.name
                          }</p>
                          <p style="color: #1d1d1d;">${
                            auditDetails.value || "NA"
                          }</p>
                        </div>
                        `
                      )
                      .join("")}
                </div>
                <div style="background-color: #f6f9fc; padding: 10px; font-size: 14px; font-weight: 600; color: #1d1d1d;">Other Stakeholders</div>
                <div>
                    <div style="padding: 8px 12px; font-size: 10px;">
                      <p style="color: #888;">Stakeholder name</p>
                      <p style="color: #1d1d1d;">${organization.admin.name}</p>
                    </div>
                </div>
              </div>
          </div>
        </div>
    <!-- ------------------------------------ End Of Audit Details ------------------------------------  -->


    <!-- -------------------------------------- Scope Of Details --------------------------------------  -->
        <div style="padding: 0px 20px; min-height: 100vh;">
          <h1 id="heading" class="domain-title">2. Scope of audit</h1>
          ${audit.scope || "NA"}
        </div>
    <!-- ---------------------------------- End Of Scope Of Details -----------------------------------  -->


    <!-- --------------------------------- Compliances Visualization -----------------------------------  -->
        <div style="font-weight: 500; padding: 0px 20px; min-height: 100vh;">
          <h1 id="heading" class="domain-title">3. Compliances Visualization</h1>
          <div style="display: flex; flex-direction: column; align-items: end; justify-content: end; margin-top: 40px;">
              <div style="font-size: 52px; font-weight: 700; color: #1d1d1d;">${
                risks.totalTasks
              }</div>
              <div style="font-size: 14px; font-weight: 500; color: #888888; text-align-last: right;">
                Total Compliances <br />
                Tasks
              </div>
          </div>
          <div style="margin-top: 40px; height: 350px; display: flex; align-items: end; gap: 5px;">
              <div style="height: ${
                (550 / risks.totalTasks) * risks.completedTasks
              }px; width:80%; background-color: #036666"></div>
              <div style="height: ${
                (250 / risks.totalTasks) * risks.tasksInReview
              }px; width:80%; background-color: #4CAF50"></div>
              <div style="height: ${
                (550 / risks.totalTasks) * risks.highRiskTasks
              }px; width:80%; background-color: #D1E2F2"></div>
              <div style="height: ${
                (350 / risks.totalTasks) * risks.lowRiskTasks
              }px; width:80%; background-color: #F44336"></div>
              <div style="height: ${
                (150 / risks.totalTasks) * risks.taskInWaiting
              }px; width:80%; background-color: #FFC107"></div>
          </div>
          <div style="display: flex; align-items: center; gap: 5px; margin-top: 10px;">
              <div style="width: 100%;">
                <div style="font-size: 22px; font-weight: 700; color: #1d1d1d;">${
                  risks.completedTasks
                }</div>
                <div style="font-size: 12px; font-weight: 500; color: #888888;">Completed</div>
              </div>
              <div style="width: 100%;">
                <div style="font-size: 22px; font-weight: 700; color: #1d1d1d;">${
                  risks.completedTasks
                }</div>
                <div style="font-size: 12px; font-weight: 500; color: #888888;">Noteworthy Effort</div>
              </div>
              <div style="width: 100%;">
                <div style="font-size: 22px; font-weight: 700; color: #1d1d1d;">${
                  risks.completedTasks
                }</div>
                <div style="font-size: 12px; font-weight: 500; color: #888888;">Risk Not Defined</div>
              </div>
              <div style="width: 100%;">
                <div style="font-size: 22px; font-weight: 700; color: #1d1d1d;">${
                  risks.completedTasks
                }</div>
                <div style="font-size: 12px; font-weight: 500; color: #888888;">Major Non-Conformity</div>
              </div>
              <div style="width: 100%;">
                <div style="font-size: 22px; font-weight: 700; color: #1d1d1d;">${
                  risks.completedTasks
                }</div>
                <div style="font-size: 12px; font-weight: 500; color: #888888;">Minor Non-Conformity</div>
              </div>
          </div>
          <div style="display: flex; gap: 5px; align-items: center; margin-top: 20px;">
              <div style="width: 20%;">
                <div style="height: 2px; background-color: #c6f2f2; margin-bottom: 20px;"></div>
                <div style="font-size: 12px; font-weight: 500; color: #888888;">Completed Tasks</div>
              </div>
              <div style="width: 80%;">
                <div style="height: 2px; background-color: #d1e2f2; margin-bottom: 20px;"></div>
                <div style="font-size: 12px; font-weight: 500; color: #888888;">Incomplete Tasks</div>
              </div>
          </div>
        </div>
    <!-- ------------------------------- End Of Compliances Visualization ---------------------------------  -->


    <!-- -------------------------------------- Summary Of Findings ---------------------------------------  -->
        <div style="font-weight: 500; padding: 0px 20px; min-height: 100vh;">
          <h1 id="heading" class="domain-title">4. Summary of findings</h1>
          <div style="background-color: #f6f9fc; padding: 10px 0px; font-size: 14px; font-weight: 600; color: #1d1d1d; display: flex; align-items: center;">
              <div style="width: 100%; padding-left: 10px;">Control area</div>
              <div style="width: 15%; padding-left: 10px;">Status</div>
          </div>
          ${areas
            .map(
              (area, areaIndex) => /*html*/ `
          <div style="display: flex; align-items: center; font-size: 10px; border-bottom: 1px solid #e1e1e1;">
              <div style="width: 100%; padding: 10px;">${areaIndex + 1}. ${
                area.name
              }</div>
              <div style="width: 15%; padding: 10px;">
                ${
                  area.status !== "completed"
                    ? /*html*/ `
                <div style="display: flex; align-items: center; gap: 5px; color: #036666;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 13" fill="none">
                      <path
                          d="M6 1.5C8.76142 1.5 11 3.73858 11 6.5C11 9.26142 8.76142 11.5 6 11.5C3.23858 11.5 1 9.26142 1 6.5C1 3.73858 3.23858 1.5 6 1.5ZM7.60984 4.98484L5.375 7.21967L4.39016 6.23484C4.24372 6.08839 4.00628 6.08839 3.85983 6.23484C3.71339 6.38128 3.71339 6.61872 3.85983 6.76516L5.10984 8.01516C5.25628 8.16161 5.49372 8.16161 5.64016 8.01516L8.14017 5.51516C8.28661 5.36872 8.28661 5.13128 8.14017 4.98484C7.99372 4.83839 7.75628 4.83839 7.60984 4.98484Z"
                          fill="#4CAF50"
                      />
                    </svg>
                    Compliant
                </div>
                `
                    : /*html*/ `
                <div style="display: flex; align-items: center; gap: 5px; color: #f44336;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 13" fill="none">
                      <path
                          d="M6 1.5C8.76142 1.5 11 3.73858 11 6.5C11 9.26142 8.76142 11.5 6 11.5C3.23858 11.5 1 9.26142 1 6.5C1 3.73858 3.23858 1.5 6 1.5ZM7.76516 4.73484L7.72311 4.69853C7.59261 4.6017 7.4135 4.60051 7.28181 4.69494L7.23484 4.73484L6 5.9695L4.76516 4.73484L4.72311 4.69853C4.59261 4.6017 4.4135 4.60051 4.28181 4.69494L4.23484 4.73484L4.19853 4.77689C4.1017 4.90739 4.10051 5.0865 4.19494 5.21819L4.23484 5.26516L5.4695 6.5L4.23484 7.73484L4.19853 7.77689C4.1017 7.90739 4.10051 8.0865 4.19494 8.21819L4.23484 8.26516L4.27689 8.30147C4.40739 8.3983 4.5865 8.39949 4.71819 8.30506L4.76516 8.26516L6 7.0305L7.23484 8.26516L7.27689 8.30147C7.40739 8.3983 7.5865 8.39949 7.71819 8.30506L7.76516 8.26516L7.80147 8.22311C7.8983 8.09261 7.89949 7.9135 7.80506 7.78181L7.76516 7.73484L6.5305 6.5L7.76516 5.26516L7.80147 5.22311C7.8983 5.09261 7.89949 4.9135 7.80506 4.78181L7.76516 4.73484L7.72311 4.69853L7.76516 4.73484Z"
                          fill="#F44336"
                      />
                    </svg>
                    Non-Compliant
                </div>
                `
                }
              </div>
          </div>
          `
            )
            .join("")}
        </div>
    <!-- ----------------------------------- End Of Summary Of Findings ------------------------------------  -->


    <!-- ------------------------------------ Observations and findings ------------------------------------  -->
        <div style=" padding: 0px 20px; min-height: 100vh;">
        <h1 id="heading" class="domain-title">5. Observations and findings</h1>
          ${domains
            .map(
              (domain, domainIndex) => /*html*/ `
                <div style="padding-bottom: 20px">
                  <h2 id="sub_heading" class="domain-title">
                    5.${domainIndex + 1}. ${domain.name}
                  </h2>
                  ${domain?.areas
                    .map(
                      (area, areaIndex) => /*html*/ `
                        <div>
                          <h3 id="small_heading" class="area-title">
                            5.${domainIndex + 1}.${areaIndex + 1}. ${area.name}
                          </h3>
                          ${
                            areaIndex === 0
                              ? /*html*/ `<div class="control-header">
                            <div>Control Details</div>
                            <div>Validation Tasks</div>
                            <div>Observation</div>
                            <div>Recommendation</div>
                            <div>Status</div>
                          </div>`
                              : ""
                          }
                              <div style="border-top:1px solid  #E1E1E1" >${area.controls
                                .map(
                                  (control) => /*html*/ `
                                <div class="control-container">
                                  <div class="control-info">
                                    <p class="control-id">${
                                      control.controlId
                                    }</p>
                                    <p class="control-details">${this.#formattedText(
                                      control.details
                                    )}</p>
                                  </div>
                                  <div class="tasks-container">
                                    ${control.tasks
                                      .map(
                                        (task, taskIndex) => /*html*/ `
                                          <div style="border: ${
                                            taskIndex ===
                                            control.tasks.length - 1
                                              ? "none"
                                              : ""
                                          }" class="task-grid">
                                            <div class="task-cell">
                                              <p class="task-title" style="word-wrap: break-word; overflow-wrap: anywhere">${
                                                task.name
                                              }</p>
                                              <p style="word-wrap: break-word; overflow-wrap: anywhere">${this.#formattedText(
                                                task.details
                                              )}</p>
                                            </div>
                                            <p class="task-cell" style="word-wrap: break-word; overflow-wrap: anywhere">${
                                              task.observation || "NA"
                                            }</p>
                                            <p class="task-cell" style="word-wrap: break-word; overflow-wrap: anywhere">${
                                              task.recommendation || "NA"
                                            }</p>
                                            <div class="task-cell">
                                              <div  style="background-color: ${this.#getBgColorForTask(
                                                task.taskStatus.status,
                                                task.riskFactors.risk
                                              )}; color: ${this.#getColorForTask(
                                          task.taskStatus.status,
                                          task.riskFactors.risk
                                        )}; border-radius: 32px;gap:10px; padding: 6px 4px 6px 16px; width:140px; height:36px; display: flex; align-items: center">
                                       
                                        ${this.#getSvgForTask(
                                          task.taskStatus.status,
                                          task.riskFactors.risk
                                        )}</div>
                                              
                                            </div>

                                          </div>
                                        `
                                      )
                                      .join("")}
                                  </div>
                                </div>
                              `
                                )
                                .join("")}</div>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              `
            )
            .join("")}
        </div>
    <!-- -------------------------- End Of Observations and findings ----------------------------  -->


    <!-- ---------------------------------------- Conclusion ------------------------------------  -->
        <div style="padding: 0px 20px;">
          <h1 id="heading" class="domain-title">7. Conclusion</h1>
          ${audit.conclusion || "NA"}
        </div>
    <!-- ----------------------------------- End Of Conclusion ----------------------------------  -->


      </body>

        <script>
          const tocOffset = 0;
          const headings = document.querySelectorAll('h1, h2, h3');
          const dataArray = Array.from(headings).map((heading) => {
            const rect = heading.getBoundingClientRect();
            return {
              text: heading.textContent,
              level: Number.parseInt(heading.tagName[1]),
              pageNumber: 1,
              position: {
                x: Math.round(rect.x),
                y: Math.round(rect.y),
                top: Math.round(rect.top),
                left: Math.round(rect.left)
              }
            }
          });

          const arrayLength = dataArray.length;
          const tocPageCount = arrayLength < 36 ? 1 : arrayLength < 76 ? 2 : arrayLength < 116 ? 3 : arrayLength < 156 ? 4 : Math.ceil(arrayLength/38);

          const tocContent = \`
                    \${dataArray.map((entry, entryIndex) => \`
                      <div class="toc-entry">
                        <div class="toc-entry-content">
                          <p class="toc-text level-\${entry.level}">\${entry.text}</p>
                          <p class="toc-page level-\${entry.level}">\${entryIndex < 3 ? (entryIndex + 2 + tocPageCount) : Math.round(((entry.position.y - (entryIndex) *61) / 628) + tocPageCount)}</p>
                        </div>
                      </div>
                    \`).join('')}
                  \`;

          document.getElementById('toc-columns').innerHTML = tocContent;
        </script>

    </html>
    `;
  };

  /**
   * Generate body template for audit status report
   */

  /**
   * Generate footer template for audit report
   */
  generateFooterTemplateForAuditReport = ({ isStatusReport = false }) => {
    return /*html*/ `
        <div
          id="report_footer"
          style="display: flex; justify-content: space-between; padding: 20px; background: #e1e1e1; align-items: center !important; width: 100%; border-top: 1px solid #e1e1e1; padding-bottom: 0%; box-sizing: border-box; z-index: -10;"
        >
          <div style="">
            ${
              !isStatusReport
                ? `
            <svg width="92" height="28" viewBox="0 0 92 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.6215 8.66378V4.57323C6.49356 1.95479 10.802 2.49539 10.802 2.49539V5.88246C5.53647 5.22785 3.6215 8.66378 3.6215 8.66378ZM0.053446 5.74756L3.55158 8.64475V16.7358L3.55113 16.7441C3.52005 17.3221 3.54709 18.4737 4.23945 19.5895C4.65576 20.26 5.24514 20.8078 5.94898 21.2061L5.93342 19.3659L5.89037 14.2764L5.89007 14.2417L5.89097 14.2071C5.98522 10.5704 8.9601 7.67059 12.5985 7.67059H14.9501V11.7038H12.5985C11.1573 11.7038 9.9767 12.8445 9.92367 14.2817L9.96639 19.3318L9.98834 21.9202C10.3319 21.8952 10.7909 21.8359 11.2942 21.7008C12.3063 21.4293 13.471 20.8595 14.2544 19.6743C14.7534 18.9189 14.8629 18.035 15.0223 16.7482L15.0445 16.5689C15.2286 15.0897 15.167 13.8545 15.081 13.0256L15.0472 12.6994L18.5902 12.5301L18.6206 12.8218C18.701 13.5911 18.7734 14.6975 18.7057 16.0235L18.704 16.0565C18.6305 17.487 18.5289 19.4631 17.8063 20.9953C17.0977 22.496 15.7648 23.6448 14.2178 24.4109C12.6697 25.1776 10.8841 25.573 9.2327 25.5514C5.90847 25.5078 1.9977 23.7698 0.558495 20.448C0.446476 20.189 0.355408 19.9355 0.282222 19.6907C0.0823428 19.0209 -0.00313279 18.326 8.75876e-05 17.6358L0.053446 5.74756Z"
                fill="#036666"
              />
              <path
                d="M30.3746 2.66529H31.1064V5.84515C31.1064 6.18352 31.0269 6.48333 30.868 6.74458C30.709 7.00425 30.4855 7.20885 30.1975 7.35836C29.9095 7.5063 29.5719 7.58026 29.1848 7.58026C28.7992 7.58026 28.4624 7.5063 28.1744 7.35836C27.8864 7.20885 27.6629 7.00425 27.504 6.74458C27.345 6.48333 27.2655 6.18352 27.2655 5.84515V2.66529H27.995V5.78613C27.995 6.00489 28.043 6.19926 28.139 6.36923C28.2366 6.5392 28.3743 6.67297 28.5521 6.77054C28.73 6.86655 28.9408 6.91455 29.1848 6.91455C29.4303 6.91455 29.642 6.86655 29.8198 6.77054C29.9992 6.67297 30.1361 6.5392 30.2306 6.36923C30.3266 6.19926 30.3746 6.00489 30.3746 5.78613V2.66529ZM36.0692 2.66529V7.5H35.3987L32.9412 3.95423H32.8964V7.5H32.1669V2.66529H32.8421L35.3019 6.21578H35.3468V2.66529H36.0692ZM37.8627 2.66529V7.5H37.1333V2.66529H37.8627ZM38.925 7.5V2.66529H41.9231V3.29324H39.6545V4.76631H41.7083V5.3919H39.6545V7.5H38.925ZM43.5496 2.66529V7.5H42.8202V2.66529H43.5496ZM44.6119 7.5V2.66529H47.6431V3.29324H45.3414V4.76631H47.4849V5.3919H45.3414V6.87205H47.6714V7.5H44.6119ZM50.1826 7.5H48.6175V2.66529H50.2322C50.7059 2.66529 51.1127 2.76208 51.4527 2.95566C51.7926 3.14766 52.0531 3.42386 52.2341 3.78426C52.4166 4.14309 52.5079 4.57352 52.5079 5.07556C52.5079 5.57918 52.4158 6.01197 52.2317 6.37395C52.0491 6.73592 51.7847 7.01448 51.4385 7.20963C51.0923 7.40321 50.6736 7.5 50.1826 7.5ZM49.3469 6.86261H50.1425C50.5107 6.86261 50.8168 6.79336 51.0608 6.65487C51.3047 6.5148 51.4873 6.31257 51.6085 6.04817C51.7296 5.7822 51.7902 5.458 51.7902 5.07556C51.7902 4.69628 51.7296 4.37444 51.6085 4.11004C51.4889 3.84564 51.3102 3.64498 51.0726 3.50806C50.8349 3.37114 50.5399 3.30268 50.1873 3.30268H49.3469V6.86261ZM59.1898 4.23751H58.4533C58.425 4.08013 58.3723 3.94164 58.2951 3.82203C58.218 3.70242 58.1236 3.60091 58.0119 3.5175C57.9001 3.43409 57.775 3.37114 57.6365 3.32865C57.4996 3.28615 57.354 3.26491 57.1998 3.26491C56.9212 3.26491 56.6718 3.33494 56.4514 3.47501C56.2327 3.61508 56.0596 3.82046 55.9321 4.09115C55.8062 4.36184 55.7432 4.69234 55.7432 5.08264C55.7432 5.47609 55.8062 5.80817 55.9321 6.07886C56.0596 6.34955 56.2335 6.55415 56.4538 6.69264C56.6741 6.83114 56.922 6.90038 57.1974 6.90038C57.3501 6.90038 57.4949 6.87992 57.6318 6.839C57.7703 6.79651 57.8954 6.73435 58.0071 6.65251C58.1189 6.57067 58.2133 6.47074 58.2904 6.3527C58.3691 6.23309 58.4234 6.09617 58.4533 5.94194L59.1898 5.9443C59.1505 6.18194 59.0742 6.4007 58.9609 6.60057C58.8491 6.79887 58.7051 6.97042 58.5289 7.11521C58.3542 7.25842 58.1543 7.36937 57.9292 7.44806C57.7042 7.52675 57.4587 7.5661 57.1927 7.5661C56.7741 7.5661 56.4011 7.46695 56.0737 7.26865C55.7464 7.06878 55.4883 6.78313 55.2994 6.41172C55.1121 6.0403 55.0185 5.59728 55.0185 5.08264C55.0185 4.56644 55.1129 4.12341 55.3018 3.75357C55.4906 3.38215 55.7487 3.0973 56.0761 2.899C56.4034 2.69913 56.7756 2.59919 57.1927 2.59919C57.4492 2.59919 57.6884 2.63617 57.9103 2.71014C58.1338 2.78254 58.3345 2.88956 58.5123 3.0312C58.6902 3.17127 58.8373 3.34281 58.9538 3.54583C59.0702 3.74728 59.1489 3.97784 59.1898 4.23751ZM64.2624 5.08264C64.2624 5.59885 64.168 6.04266 63.9791 6.41408C63.7903 6.78392 63.5314 7.06878 63.2024 7.26865C62.8751 7.46695 62.5029 7.5661 62.0858 7.5661C61.6672 7.5661 61.2934 7.46695 60.9645 7.26865C60.6372 7.06878 60.379 6.78313 60.1902 6.41172C60.0013 6.0403 59.9069 5.59728 59.9069 5.08264C59.9069 4.56644 60.0013 4.12341 60.1902 3.75357C60.379 3.38215 60.6372 3.0973 60.9645 2.899C61.2934 2.69913 61.6672 2.59919 62.0858 2.59919C62.5029 2.59919 62.8751 2.69913 63.2024 2.899C63.5314 3.0973 63.7903 3.38215 63.9791 3.75357C64.168 4.12341 64.2624 4.56644 64.2624 5.08264ZM63.54 5.08264C63.54 4.68919 63.4763 4.35791 63.3488 4.08879C63.2229 3.8181 63.0498 3.6135 62.8295 3.47501C62.6107 3.33494 62.3628 3.26491 62.0858 3.26491C61.8073 3.26491 61.5586 3.33494 61.3399 3.47501C61.1211 3.6135 60.948 3.8181 60.8205 4.08879C60.6946 4.35791 60.6316 4.68919 60.6316 5.08264C60.6316 5.47609 60.6946 5.80817 60.8205 6.07886C60.948 6.34798 61.1211 6.55257 61.3399 6.69264C61.5586 6.83114 61.8073 6.90038 62.0858 6.90038C62.3628 6.90038 62.6107 6.83114 62.8295 6.69264C63.0498 6.55257 63.2229 6.34798 63.3488 6.07886C63.4763 5.80817 63.54 5.47609 63.54 5.08264ZM69.0741 2.66529V7.5H68.4037L65.9462 3.95423H65.9013V7.5H65.1719V2.66529H65.847L68.3069 6.21578H68.3517V2.66529H69.0741ZM69.8997 3.29324V2.66529H73.6415V3.29324H72.133V7.5H71.4059V3.29324H69.8997ZM74.4683 7.5V2.66529H76.1916C76.5662 2.66529 76.877 2.72982 77.1241 2.85887C77.3727 2.98792 77.5584 3.16654 77.6812 3.39475C77.804 3.62137 77.8653 3.88341 77.8653 4.18086C77.8653 4.47673 77.8032 4.7372 77.6788 4.96225C77.5561 5.18573 77.3704 5.35963 77.1217 5.48396C76.8746 5.60829 76.5638 5.67046 76.1892 5.67046H74.8838V5.04251H76.1231C76.3592 5.04251 76.5512 5.00868 76.6991 4.941C76.8487 4.87333 76.958 4.77497 77.0273 4.64592C77.0965 4.51686 77.1312 4.36184 77.1312 4.18086C77.1312 3.9983 77.0957 3.84013 77.0249 3.70636C76.9557 3.57258 76.8463 3.47029 76.6968 3.39947C76.5488 3.32707 76.3545 3.29087 76.1137 3.29087H75.1977V7.5H74.4683ZM76.855 5.31871L78.0495 7.5H77.2185L76.0476 5.31871H76.855ZM82.9526 5.08264C82.9526 5.59885 82.8582 6.04266 82.6694 6.41408C82.4805 6.78392 82.2216 7.06878 81.8927 7.26865C81.5653 7.46695 81.1931 7.5661 80.7761 7.5661C80.3574 7.5661 79.9837 7.46695 79.6547 7.26865C79.3274 7.06878 79.0693 6.78313 78.8804 6.41172C78.6916 6.0403 78.5971 5.59728 78.5971 5.08264C78.5971 4.56644 78.6916 4.12341 78.8804 3.75357C79.0693 3.38215 79.3274 3.0973 79.6547 2.899C79.9837 2.69913 80.3574 2.59919 80.7761 2.59919C81.1931 2.59919 81.5653 2.69913 81.8927 2.899C82.2216 3.0973 82.4805 3.38215 82.6694 3.75357C82.8582 4.12341 82.9526 4.56644 82.9526 5.08264ZM82.2303 5.08264C82.2303 4.68919 82.1665 4.35791 82.039 4.08879C81.9131 3.8181 81.74 3.6135 81.5197 3.47501C81.3009 3.33494 81.0531 3.26491 80.7761 3.26491C80.4975 3.26491 80.2489 3.33494 80.0301 3.47501C79.8113 3.6135 79.6382 3.8181 79.5107 4.08879C79.3848 4.35791 79.3219 4.68919 79.3219 5.08264C79.3219 5.47609 79.3848 5.80817 79.5107 6.07886C79.6382 6.34798 79.8113 6.55257 80.0301 6.69264C80.2489 6.83114 80.4975 6.90038 80.7761 6.90038C81.0531 6.90038 81.3009 6.83114 81.5197 6.69264C81.74 6.55257 81.9131 6.34798 82.039 6.07886C82.1665 5.80817 82.2303 5.47609 82.2303 5.08264ZM83.8621 7.5V2.66529H84.5916V6.87205H86.7823V7.5H83.8621ZM90.2513 3.93535C90.2261 3.71187 90.1223 3.53875 89.9397 3.41599C89.7572 3.29166 89.5274 3.2295 89.2504 3.2295C89.0521 3.2295 88.8805 3.26097 88.7358 3.32392C88.591 3.3853 88.4784 3.47029 88.3982 3.57888C88.3195 3.6859 88.2801 3.80787 88.2801 3.94479C88.2801 4.05968 88.3069 4.15882 88.3604 4.24224C88.4155 4.32565 88.4871 4.39568 88.5752 4.45234C88.6649 4.50742 88.7609 4.55385 88.8632 4.59162C88.9655 4.62782 89.0639 4.65772 89.1583 4.68133L89.6305 4.80408C89.7847 4.84185 89.9429 4.893 90.105 4.95753C90.2671 5.02205 90.4174 5.10704 90.5559 5.21248C90.6944 5.31793 90.8061 5.44855 90.8911 5.60436C90.9776 5.76017 91.0209 5.94666 91.0209 6.16384C91.0209 6.43769 90.9501 6.68084 90.8085 6.8933C90.6684 7.10576 90.4646 7.27337 90.197 7.39613C89.9311 7.51889 89.6092 7.58026 89.2315 7.58026C88.8695 7.58026 88.5563 7.52282 88.2919 7.40793C88.0276 7.29305 87.8206 7.13016 87.6711 6.91927C87.5216 6.70681 87.4389 6.455 87.4232 6.16384H88.155C88.1692 6.33854 88.2258 6.48411 88.325 6.60057C88.4257 6.71546 88.554 6.80123 88.7098 6.85789C88.8672 6.91297 89.0395 6.94051 89.2268 6.94051C89.433 6.94051 89.6163 6.90825 89.7768 6.84373C89.9389 6.77763 90.0664 6.68635 90.1593 6.56988C90.2521 6.45185 90.2985 6.31414 90.2985 6.15676C90.2985 6.01355 90.2576 5.8963 90.1758 5.80502C90.0955 5.71374 89.9861 5.6382 89.8476 5.57839C89.7107 5.51859 89.5557 5.46586 89.3826 5.42022L88.8113 5.26442C88.4241 5.15897 88.1173 5.00395 87.8906 4.79936C87.6656 4.59477 87.5531 4.32407 87.5531 3.98728C87.5531 3.70872 87.6286 3.46557 87.7797 3.25782C87.9308 3.05008 88.1354 2.88877 88.3935 2.77388C88.6516 2.65742 88.9427 2.59919 89.2669 2.59919C89.5943 2.59919 89.8831 2.65663 90.1333 2.77152C90.3851 2.88641 90.5834 3.04457 90.7282 3.24602C90.873 3.44589 90.9485 3.67567 90.9548 3.93535H90.2513ZM27.2655 16.5V11.6653H30.2636V12.2932H27.995V13.7663H30.0488V14.3919H27.995V16.5H27.2655ZM31.1607 16.5V11.6653H32.884C33.2586 11.6653 33.5694 11.7298 33.8165 11.8589C34.0651 11.9879 34.2508 12.1665 34.3736 12.3947C34.4964 12.6214 34.5577 12.8834 34.5577 13.1809C34.5577 13.4767 34.4956 13.7372 34.3712 13.9622C34.2485 14.1857 34.0628 14.3596 33.8141 14.484C33.567 14.6083 33.2562 14.6705 32.8816 14.6705H31.5762V14.0425H32.8155C33.0516 14.0425 33.2436 14.0087 33.3915 13.941C33.5411 13.8733 33.6504 13.775 33.7197 13.6459C33.7889 13.5169 33.8236 13.3618 33.8236 13.1809C33.8236 12.9983 33.7881 12.8401 33.7173 12.7064C33.6481 12.5726 33.5387 12.4703 33.3892 12.3995C33.2412 12.3271 33.0469 12.2909 32.8061 12.2909H31.8901V16.5H31.1607ZM33.5474 14.3187L34.7419 16.5H33.9109L32.74 14.3187H33.5474ZM35.8538 16.5H35.0794L36.8193 11.6653H37.662L39.4019 16.5H38.6276L37.2607 12.5435H37.223L35.8538 16.5ZM35.9836 14.6067H38.4954V15.2205H35.9836V14.6067ZM40.1001 11.6653H40.9853L42.5245 15.4235H42.5812L44.1203 11.6653H45.0056V16.5H44.3115V13.0014H44.2667L42.8408 16.4929H42.2648L40.839 12.9991H40.7941V16.5H40.1001V11.6653ZM46.0661 16.5V11.6653H49.0973V12.2932H46.7956V13.7663H48.9391V14.3919H46.7956V15.8721H49.1256V16.5H46.0661ZM51.0183 16.5L49.6774 11.6653H50.4446L51.3866 15.4094H51.4314L52.4111 11.6653H53.1712L54.1509 15.4117H54.1958L55.1353 11.6653H55.9049L54.5617 16.5H53.8275L52.8101 12.8787H52.7723L51.7548 16.5H51.0183ZM60.5295 14.0826C60.5295 14.5989 60.4351 15.0427 60.2463 15.4141C60.0574 15.7839 59.7985 16.0688 59.4696 16.2687C59.1422 16.467 58.77 16.5661 58.353 16.5661C57.9344 16.5661 57.5606 16.467 57.2317 16.2687C56.9043 16.0688 56.6462 15.7831 56.4573 15.4117C56.2685 15.0403 56.1741 14.5973 56.1741 14.0826C56.1741 13.5664 56.2685 13.1234 56.4573 12.7536C56.6462 12.3822 56.9043 12.0973 57.2317 11.899C57.5606 11.6991 57.9344 11.5992 58.353 11.5992C58.77 11.5992 59.1422 11.6991 59.4696 11.899C59.7985 12.0973 60.0574 12.3822 60.2463 12.7536C60.4351 13.1234 60.5295 13.5664 60.5295 14.0826ZM59.8072 14.0826C59.8072 13.6892 59.7434 13.3579 59.616 13.0888C59.4901 12.8181 59.3169 12.6135 59.0966 12.475C58.8778 12.3349 58.63 12.2649 58.353 12.2649C58.0744 12.2649 57.8258 12.3349 57.607 12.475C57.3882 12.6135 57.2151 12.8181 57.0876 13.0888C56.9617 13.3579 56.8988 13.6892 56.8988 14.0826C56.8988 14.4761 56.9617 14.8082 57.0876 15.0789C57.2151 15.348 57.3882 15.5526 57.607 15.6926C57.8258 15.8311 58.0744 15.9004 58.353 15.9004C58.63 15.9004 58.8778 15.8311 59.0966 15.6926C59.3169 15.5526 59.4901 15.348 59.616 15.0789C59.7434 14.8082 59.8072 14.4761 59.8072 14.0826ZM61.439 16.5V11.6653H63.1623C63.5369 11.6653 63.8477 11.7298 64.0948 11.8589C64.3435 11.9879 64.5292 12.1665 64.6519 12.3947C64.7747 12.6214 64.8361 12.8834 64.8361 13.1809C64.8361 13.4767 64.7739 13.7372 64.6496 13.9622C64.5268 14.1857 64.3411 14.3596 64.0924 14.484C63.8453 14.6083 63.5345 14.6705 63.16 14.6705H61.8545V14.0425H63.0939C63.3299 14.0425 63.5219 14.0087 63.6699 13.941C63.8194 13.8733 63.9288 13.775 63.998 13.6459C64.0672 13.5169 64.1019 13.3618 64.1019 13.1809C64.1019 12.9983 64.0665 12.8401 63.9956 12.7064C63.9264 12.5726 63.817 12.4703 63.6675 12.3995C63.5196 12.3271 63.3252 12.2909 63.0844 12.2909H62.1685V16.5H61.439ZM63.8257 14.3187L65.0202 16.5H64.1892L63.0183 14.3187H63.8257ZM65.7237 16.5V11.6653H66.4531V13.9741H66.5121L68.54 11.6653H69.4583L67.5084 13.8419L69.4654 16.5H68.5872L67.0244 14.34L66.4531 14.9962V16.5H65.7237ZM27.2655 25.5V20.6653H30.2636V21.2932H27.995V22.7663H30.0488V23.3919H27.995V25.5H27.2655ZM35.3604 23.0826C35.3604 23.5989 35.2659 24.0427 35.0771 24.4141C34.8882 24.7839 34.6293 25.0688 34.3004 25.2687C33.9731 25.467 33.6009 25.5661 33.1838 25.5661C32.7652 25.5661 32.3914 25.467 32.0625 25.2687C31.7351 25.0688 31.477 24.7831 31.2882 24.4117C31.0993 24.0403 31.0049 23.5973 31.0049 23.0826C31.0049 22.5664 31.0993 22.1234 31.2882 21.7536C31.477 21.3822 31.7351 21.0973 32.0625 20.899C32.3914 20.6991 32.7652 20.5992 33.1838 20.5992C33.6009 20.5992 33.9731 20.6991 34.3004 20.899C34.6293 21.0973 34.8882 21.3822 35.0771 21.7536C35.2659 22.1234 35.3604 22.5664 35.3604 23.0826ZM34.638 23.0826C34.638 22.6892 34.5743 22.3579 34.4468 22.0888C34.3209 21.8181 34.1478 21.6135 33.9274 21.475C33.7087 21.3349 33.4608 21.2649 33.1838 21.2649C32.9052 21.2649 32.6566 21.3349 32.4378 21.475C32.2191 21.6135 32.0459 21.8181 31.9185 22.0888C31.7926 22.3579 31.7296 22.6892 31.7296 23.0826C31.7296 23.4761 31.7926 23.8082 31.9185 24.0789C32.0459 24.348 32.2191 24.5526 32.4378 24.6926C32.6566 24.8311 32.9052 24.9004 33.1838 24.9004C33.4608 24.9004 33.7087 24.8311 33.9274 24.6926C34.1478 24.5526 34.3209 24.348 34.4468 24.0789C34.5743 23.8082 34.638 23.4761 34.638 23.0826ZM39.3789 20.6653H40.1107V23.8452C40.1107 24.1835 40.0312 24.4833 39.8723 24.7446C39.7133 25.0043 39.4898 25.2088 39.2018 25.3584C38.9138 25.5063 38.5762 25.5803 38.1891 25.5803C37.8035 25.5803 37.4667 25.5063 37.1787 25.3584C36.8907 25.2088 36.6672 25.0043 36.5083 24.7446C36.3493 24.4833 36.2698 24.1835 36.2698 23.8452V20.6653H36.9993V23.7861C36.9993 24.0049 37.0473 24.1993 37.1433 24.3692C37.2409 24.5392 37.3786 24.673 37.5564 24.7705C37.7342 24.8665 37.9451 24.9145 38.1891 24.9145C38.4346 24.9145 38.6463 24.8665 38.8241 24.7705C39.0035 24.673 39.1404 24.5392 39.2349 24.3692C39.3309 24.1993 39.3789 24.0049 39.3789 23.7861V20.6653ZM45.0735 20.6653V25.5H44.403L41.9455 21.9542H41.9007V25.5H41.1712V20.6653H41.8464L44.3062 24.2158H44.3511V20.6653H45.0735ZM47.7027 25.5H46.1375V20.6653H47.7523C48.226 20.6653 48.6328 20.7621 48.9727 20.9557C49.3127 21.1477 49.5731 21.4239 49.7541 21.7843C49.9367 22.1431 50.028 22.5735 50.028 23.0756C50.028 23.5792 49.9359 24.012 49.7518 24.3739C49.5692 24.7359 49.3048 25.0145 48.9586 25.2096C48.6123 25.4032 48.1937 25.5 47.7027 25.5ZM46.867 24.8626H47.6626C48.0308 24.8626 48.3369 24.7934 48.5809 24.6549C48.8248 24.5148 49.0074 24.3126 49.1286 24.0482C49.2497 23.7822 49.3103 23.458 49.3103 23.0756C49.3103 22.6963 49.2497 22.3744 49.1286 22.11C49.0089 21.8456 48.8303 21.645 48.5927 21.5081C48.355 21.3711 48.0599 21.3027 47.7074 21.3027H46.867V24.8626ZM51.1033 25.5H50.329L52.0688 20.6653H52.9116L54.6514 25.5H53.8771L52.5103 21.5435H52.4725L51.1033 25.5ZM51.2331 23.6067H53.7449V24.2205H51.2331V23.6067ZM54.5399 21.2932V20.6653H58.2816V21.2932H56.7731V25.5H56.046V21.2932H54.5399ZM59.8379 20.6653V25.5H59.1084V20.6653H59.8379ZM65.0999 23.0826C65.0999 23.5989 65.0054 24.0427 64.8166 24.4141C64.6277 24.7839 64.3688 25.0688 64.0399 25.2687C63.7126 25.467 63.3404 25.5661 62.9233 25.5661C62.5047 25.5661 62.1309 25.467 61.802 25.2687C61.4746 25.0688 61.2165 24.7831 61.0277 24.4117C60.8388 24.0403 60.7444 23.5973 60.7444 23.0826C60.7444 22.5664 60.8388 22.1234 61.0277 21.7536C61.2165 21.3822 61.4746 21.0973 61.802 20.899C62.1309 20.6991 62.5047 20.5992 62.9233 20.5992C63.3404 20.5992 63.7126 20.6991 64.0399 20.899C64.3688 21.0973 64.6277 21.3822 64.8166 21.7536C65.0054 22.1234 65.0999 22.5664 65.0999 23.0826ZM64.3775 23.0826C64.3775 22.6892 64.3137 22.3579 64.1863 22.0888C64.0604 21.8181 63.8872 21.6135 63.6669 21.475C63.4482 21.3349 63.2003 21.2649 62.9233 21.2649C62.6447 21.2649 62.3961 21.3349 62.1773 21.475C61.9586 21.6135 61.7854 21.8181 61.658 22.0888C61.5321 22.3579 61.4691 22.6892 61.4691 23.0826C61.4691 23.4761 61.5321 23.8082 61.658 24.0789C61.7854 24.348 61.9586 24.5526 62.1773 24.6926C62.3961 24.8311 62.6447 24.9004 62.9233 24.9004C63.2003 24.9004 63.4482 24.8311 63.6669 24.6926C63.8872 24.5526 64.0604 24.348 64.1863 24.0789C64.3137 23.8082 64.3775 23.4761 64.3775 23.0826ZM69.9116 20.6653V25.5H69.2411L66.7836 21.9542H66.7388V25.5H66.0093V20.6653H66.6845L69.1443 24.2158H69.1892V20.6653H69.9116Z"
                fill="#888888"
              />
            </svg>
            `
                : `
            <svg width="92" height="27" viewBox="0 0 92 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.6215 8.16378V4.07323C6.49356 1.45479 10.802 1.99539 10.802 1.99539V5.38246C5.53647 4.72785 3.6215 8.16378 3.6215 8.16378ZM0.053446 5.24756L3.55158 8.14475V16.2358L3.55113 16.2441C3.52005 16.8221 3.54709 17.9737 4.23945 19.0895C4.65576 19.76 5.24514 20.3078 5.94898 20.7061L5.93342 18.8659L5.89037 13.7764L5.89007 13.7417L5.89097 13.7071C5.98522 10.0704 8.9601 7.17059 12.5985 7.17059H14.9501V11.2038H12.5985C11.1573 11.2038 9.9767 12.3445 9.92367 13.7817L9.96639 18.8318L9.98834 21.4202C10.3319 21.3952 10.7909 21.3359 11.2942 21.2008C12.3063 20.9293 13.471 20.3595 14.2544 19.1743C14.7534 18.4189 14.8629 17.535 15.0223 16.2482L15.0445 16.0689C15.2286 14.5897 15.167 13.3545 15.081 12.5256L15.0472 12.1994L18.5902 12.0301L18.6206 12.3218C18.701 13.0911 18.7734 14.1975 18.7057 15.5235L18.704 15.5565C18.6305 16.987 18.5289 18.9631 17.8063 20.4953C17.0977 21.996 15.7648 23.1448 14.2178 23.9109C12.6697 24.6776 10.8841 25.073 9.2327 25.0514C5.90847 25.0078 1.9977 23.2698 0.558495 19.948C0.446476 19.689 0.355408 19.4355 0.282222 19.1907C0.0823428 18.5209 -0.00313279 17.826 8.75876e-05 17.1358L0.053446 5.24756Z"
                fill="#1E3888"
              />
              <path
                d="M30.3746 2.16529H31.1064V5.34515C31.1064 5.68352 31.0269 5.98333 30.868 6.24458C30.709 6.50425 30.4855 6.70885 30.1975 6.85836C29.9095 7.0063 29.5719 7.08026 29.1848 7.08026C28.7992 7.08026 28.4624 7.0063 28.1744 6.85836C27.8864 6.70885 27.6629 6.50425 27.504 6.24458C27.345 5.98333 27.2655 5.68352 27.2655 5.34515V2.16529H27.995V5.28613C27.995 5.50489 28.043 5.69926 28.139 5.86923C28.2366 6.0392 28.3743 6.17297 28.5521 6.27054C28.73 6.36655 28.9408 6.41455 29.1848 6.41455C29.4303 6.41455 29.642 6.36655 29.8198 6.27054C29.9992 6.17297 30.1361 6.0392 30.2306 5.86923C30.3266 5.69926 30.3746 5.50489 30.3746 5.28613V2.16529ZM36.0692 2.16529V7H35.3987L32.9412 3.45423H32.8964V7H32.1669V2.16529H32.8421L35.3019 5.71578H35.3468V2.16529H36.0692ZM37.8627 2.16529V7H37.1333V2.16529H37.8627ZM38.925 7V2.16529H41.9231V2.79324H39.6545V4.26631H41.7083V4.8919H39.6545V7H38.925ZM43.5496 2.16529V7H42.8202V2.16529H43.5496ZM44.6119 7V2.16529H47.6431V2.79324H45.3414V4.26631H47.4849V4.8919H45.3414V6.37205H47.6714V7H44.6119ZM50.1826 7H48.6175V2.16529H50.2322C50.7059 2.16529 51.1127 2.26208 51.4527 2.45566C51.7926 2.64766 52.0531 2.92386 52.2341 3.28426C52.4166 3.64309 52.5079 4.07352 52.5079 4.57556C52.5079 5.07918 52.4158 5.51197 52.2317 5.87395C52.0491 6.23592 51.7847 6.51448 51.4385 6.70963C51.0923 6.90321 50.6736 7 50.1826 7ZM49.3469 6.36261H50.1425C50.5107 6.36261 50.8168 6.29336 51.0608 6.15487C51.3047 6.0148 51.4873 5.81257 51.6085 5.54817C51.7296 5.2822 51.7902 4.958 51.7902 4.57556C51.7902 4.19628 51.7296 3.87444 51.6085 3.61004C51.4889 3.34564 51.3102 3.14498 51.0726 3.00806C50.8349 2.87114 50.5399 2.80268 50.1873 2.80268H49.3469V6.36261ZM59.1898 3.73751H58.4533C58.425 3.58013 58.3723 3.44164 58.2951 3.32203C58.218 3.20242 58.1236 3.10091 58.0119 3.0175C57.9001 2.93409 57.775 2.87114 57.6365 2.82865C57.4996 2.78615 57.354 2.76491 57.1998 2.76491C56.9212 2.76491 56.6718 2.83494 56.4514 2.97501C56.2327 3.11508 56.0596 3.32046 55.9321 3.59115C55.8062 3.86184 55.7432 4.19234 55.7432 4.58264C55.7432 4.97609 55.8062 5.30817 55.9321 5.57886C56.0596 5.84955 56.2335 6.05415 56.4538 6.19264C56.6741 6.33114 56.922 6.40038 57.1974 6.40038C57.3501 6.40038 57.4949 6.37992 57.6318 6.339C57.7703 6.29651 57.8954 6.23435 58.0071 6.15251C58.1189 6.07067 58.2133 5.97074 58.2904 5.8527C58.3691 5.73309 58.4234 5.59617 58.4533 5.44194L59.1898 5.4443C59.1505 5.68194 59.0742 5.9007 58.9609 6.10057C58.8491 6.29887 58.7051 6.47042 58.5289 6.61521C58.3542 6.75842 58.1543 6.86937 57.9292 6.94806C57.7042 7.02675 57.4587 7.0661 57.1927 7.0661C56.7741 7.0661 56.4011 6.96695 56.0737 6.76865C55.7464 6.56878 55.4883 6.28313 55.2994 5.91172C55.1121 5.5403 55.0185 5.09728 55.0185 4.58264C55.0185 4.06644 55.1129 3.62341 55.3018 3.25357C55.4906 2.88215 55.7487 2.5973 56.0761 2.399C56.4034 2.19913 56.7756 2.09919 57.1927 2.09919C57.4492 2.09919 57.6884 2.13617 57.9103 2.21014C58.1338 2.28254 58.3345 2.38956 58.5123 2.5312C58.6902 2.67127 58.8373 2.84281 58.9538 3.04583C59.0702 3.24728 59.1489 3.47784 59.1898 3.73751ZM64.2624 4.58264C64.2624 5.09885 64.168 5.54266 63.9791 5.91408C63.7903 6.28392 63.5314 6.56878 63.2024 6.76865C62.8751 6.96695 62.5029 7.0661 62.0858 7.0661C61.6672 7.0661 61.2934 6.96695 60.9645 6.76865C60.6372 6.56878 60.379 6.28313 60.1902 5.91172C60.0013 5.5403 59.9069 5.09728 59.9069 4.58264C59.9069 4.06644 60.0013 3.62341 60.1902 3.25357C60.379 2.88215 60.6372 2.5973 60.9645 2.399C61.2934 2.19913 61.6672 2.09919 62.0858 2.09919C62.5029 2.09919 62.8751 2.19913 63.2024 2.399C63.5314 2.5973 63.7903 2.88215 63.9791 3.25357C64.168 3.62341 64.2624 4.06644 64.2624 4.58264ZM63.54 4.58264C63.54 4.18919 63.4763 3.85791 63.3488 3.58879C63.2229 3.3181 63.0498 3.1135 62.8295 2.97501C62.6107 2.83494 62.3628 2.76491 62.0858 2.76491C61.8073 2.76491 61.5586 2.83494 61.3399 2.97501C61.1211 3.1135 60.948 3.3181 60.8205 3.58879C60.6946 3.85791 60.6316 4.18919 60.6316 4.58264C60.6316 4.97609 60.6946 5.30817 60.8205 5.57886C60.948 5.84798 61.1211 6.05257 61.3399 6.19264C61.5586 6.33114 61.8073 6.40038 62.0858 6.40038C62.3628 6.40038 62.6107 6.33114 62.8295 6.19264C63.0498 6.05257 63.2229 5.84798 63.3488 5.57886C63.4763 5.30817 63.54 4.97609 63.54 4.58264ZM69.0741 2.16529V7H68.4037L65.9462 3.45423H65.9013V7H65.1719V2.16529H65.847L68.3069 5.71578H68.3517V2.16529H69.0741ZM69.8997 2.79324V2.16529H73.6415V2.79324H72.133V7H71.4059V2.79324H69.8997ZM74.4683 7V2.16529H76.1916C76.5662 2.16529 76.877 2.22982 77.1241 2.35887C77.3727 2.48792 77.5584 2.66654 77.6812 2.89475C77.804 3.12137 77.8653 3.38341 77.8653 3.68086C77.8653 3.97673 77.8032 4.2372 77.6788 4.46225C77.5561 4.68573 77.3704 4.85963 77.1217 4.98396C76.8746 5.10829 76.5638 5.17046 76.1892 5.17046H74.8838V4.54251H76.1231C76.3592 4.54251 76.5512 4.50868 76.6991 4.441C76.8487 4.37333 76.958 4.27497 77.0273 4.14592C77.0965 4.01686 77.1312 3.86184 77.1312 3.68086C77.1312 3.4983 77.0957 3.34013 77.0249 3.20636C76.9557 3.07258 76.8463 2.97029 76.6968 2.89947C76.5488 2.82707 76.3545 2.79087 76.1137 2.79087H75.1977V7H74.4683ZM76.855 4.81871L78.0495 7H77.2185L76.0476 4.81871H76.855ZM82.9526 4.58264C82.9526 5.09885 82.8582 5.54266 82.6694 5.91408C82.4805 6.28392 82.2216 6.56878 81.8927 6.76865C81.5653 6.96695 81.1931 7.0661 80.7761 7.0661C80.3574 7.0661 79.9837 6.96695 79.6547 6.76865C79.3274 6.56878 79.0693 6.28313 78.8804 5.91172C78.6916 5.5403 78.5971 5.09728 78.5971 4.58264C78.5971 4.06644 78.6916 3.62341 78.8804 3.25357C79.0693 2.88215 79.3274 2.5973 79.6547 2.399C79.9837 2.19913 80.3574 2.09919 80.7761 2.09919C81.1931 2.09919 81.5653 2.19913 81.8927 2.399C82.2216 2.5973 82.4805 2.88215 82.6694 3.25357C82.8582 3.62341 82.9526 4.06644 82.9526 4.58264ZM82.2303 4.58264C82.2303 4.18919 82.1665 3.85791 82.039 3.58879C81.9131 3.3181 81.74 3.1135 81.5197 2.97501C81.3009 2.83494 81.0531 2.76491 80.7761 2.76491C80.4975 2.76491 80.2489 2.83494 80.0301 2.97501C79.8113 3.1135 79.6382 3.3181 79.5107 3.58879C79.3848 3.85791 79.3219 4.18919 79.3219 4.58264C79.3219 4.97609 79.3848 5.30817 79.5107 5.57886C79.6382 5.84798 79.8113 6.05257 80.0301 6.19264C80.2489 6.33114 80.4975 6.40038 80.7761 6.40038C81.0531 6.40038 81.3009 6.33114 81.5197 6.19264C81.74 6.05257 81.9131 5.84798 82.039 5.57886C82.1665 5.30817 82.2303 4.97609 82.2303 4.58264ZM83.8621 7V2.16529H84.5916V6.37205H86.7823V7H83.8621ZM90.2513 3.43535C90.2261 3.21187 90.1223 3.03875 89.9397 2.91599C89.7572 2.79166 89.5274 2.7295 89.2504 2.7295C89.0521 2.7295 88.8805 2.76097 88.7358 2.82392C88.591 2.8853 88.4784 2.97029 88.3982 3.07888C88.3195 3.1859 88.2801 3.30787 88.2801 3.44479C88.2801 3.55968 88.3069 3.65882 88.3604 3.74224C88.4155 3.82565 88.4871 3.89568 88.5752 3.95234C88.6649 4.00742 88.7609 4.05385 88.8632 4.09162C88.9655 4.12782 89.0639 4.15772 89.1583 4.18133L89.6305 4.30408C89.7847 4.34185 89.9429 4.393 90.105 4.45753C90.2671 4.52205 90.4174 4.60704 90.5559 4.71248C90.6944 4.81793 90.8061 4.94855 90.8911 5.10436C90.9776 5.26017 91.0209 5.44666 91.0209 5.66384C91.0209 5.93769 90.9501 6.18084 90.8085 6.3933C90.6684 6.60576 90.4646 6.77337 90.197 6.89613C89.9311 7.01889 89.6092 7.08026 89.2315 7.08026C88.8695 7.08026 88.5563 7.02282 88.2919 6.90793C88.0276 6.79305 87.8206 6.63016 87.6711 6.41927C87.5216 6.20681 87.4389 5.955 87.4232 5.66384H88.155C88.1692 5.83854 88.2258 5.98411 88.325 6.10057C88.4257 6.21546 88.554 6.30123 88.7098 6.35789C88.8672 6.41297 89.0395 6.44051 89.2268 6.44051C89.433 6.44051 89.6163 6.40825 89.7768 6.34373C89.9389 6.27763 90.0664 6.18635 90.1593 6.06988C90.2521 5.95185 90.2985 5.81414 90.2985 5.65676C90.2985 5.51355 90.2576 5.3963 90.1758 5.30502C90.0955 5.21374 89.9861 5.1382 89.8476 5.07839C89.7107 5.01859 89.5557 4.96586 89.3826 4.92022L88.8113 4.76442C88.4241 4.65897 88.1173 4.50395 87.8906 4.29936C87.6656 4.09477 87.5531 3.82407 87.5531 3.48728C87.5531 3.20872 87.6286 2.96557 87.7797 2.75782C87.9308 2.55008 88.1354 2.38877 88.3935 2.27388C88.6516 2.15742 88.9427 2.09919 89.2669 2.09919C89.5943 2.09919 89.8831 2.15663 90.1333 2.27152C90.3851 2.38641 90.5834 2.54457 90.7282 2.74602C90.873 2.94589 90.9485 3.17567 90.9548 3.43535H90.2513ZM27.2655 16V11.1653H30.2636V11.7932H27.995V13.2663H30.0488V13.8919H27.995V16H27.2655ZM31.1607 16V11.1653H32.884C33.2586 11.1653 33.5694 11.2298 33.8165 11.3589C34.0651 11.4879 34.2508 11.6665 34.3736 11.8947C34.4964 12.1214 34.5577 12.3834 34.5577 12.6809C34.5577 12.9767 34.4956 13.2372 34.3712 13.4622C34.2485 13.6857 34.0628 13.8596 33.8141 13.984C33.567 14.1083 33.2562 14.1705 32.8816 14.1705H31.5762V13.5425H32.8155C33.0516 13.5425 33.2436 13.5087 33.3915 13.441C33.5411 13.3733 33.6504 13.275 33.7197 13.1459C33.7889 13.0169 33.8236 12.8618 33.8236 12.6809C33.8236 12.4983 33.7881 12.3401 33.7173 12.2064C33.6481 12.0726 33.5387 11.9703 33.3892 11.8995C33.2412 11.8271 33.0469 11.7909 32.8061 11.7909H31.8901V16H31.1607ZM33.5474 13.8187L34.7419 16H33.9109L32.74 13.8187H33.5474ZM35.8538 16H35.0794L36.8193 11.1653H37.662L39.4019 16H38.6276L37.2607 12.0435H37.223L35.8538 16ZM35.9836 14.1067H38.4954V14.7205H35.9836V14.1067ZM40.1001 11.1653H40.9853L42.5245 14.9235H42.5812L44.1203 11.1653H45.0056V16H44.3115V12.5014H44.2667L42.8408 15.9929H42.2648L40.839 12.4991H40.7941V16H40.1001V11.1653ZM46.0661 16V11.1653H49.0973V11.7932H46.7956V13.2663H48.9391V13.8919H46.7956V15.3721H49.1256V16H46.0661ZM51.0183 16L49.6774 11.1653H50.4446L51.3866 14.9094H51.4314L52.4111 11.1653H53.1712L54.1509 14.9117H54.1958L55.1353 11.1653H55.9049L54.5617 16H53.8275L52.8101 12.3787H52.7723L51.7548 16H51.0183ZM60.5295 13.5826C60.5295 14.0989 60.4351 14.5427 60.2463 14.9141C60.0574 15.2839 59.7985 15.5688 59.4696 15.7687C59.1422 15.967 58.77 16.0661 58.353 16.0661C57.9344 16.0661 57.5606 15.967 57.2317 15.7687C56.9043 15.5688 56.6462 15.2831 56.4573 14.9117C56.2685 14.5403 56.1741 14.0973 56.1741 13.5826C56.1741 13.0664 56.2685 12.6234 56.4573 12.2536C56.6462 11.8822 56.9043 11.5973 57.2317 11.399C57.5606 11.1991 57.9344 11.0992 58.353 11.0992C58.77 11.0992 59.1422 11.1991 59.4696 11.399C59.7985 11.5973 60.0574 11.8822 60.2463 12.2536C60.4351 12.6234 60.5295 13.0664 60.5295 13.5826ZM59.8072 13.5826C59.8072 13.1892 59.7434 12.8579 59.616 12.5888C59.4901 12.3181 59.3169 12.1135 59.0966 11.975C58.8778 11.8349 58.63 11.7649 58.353 11.7649C58.0744 11.7649 57.8258 11.8349 57.607 11.975C57.3882 12.1135 57.2151 12.3181 57.0876 12.5888C56.9617 12.8579 56.8988 13.1892 56.8988 13.5826C56.8988 13.9761 56.9617 14.3082 57.0876 14.5789C57.2151 14.848 57.3882 15.0526 57.607 15.1926C57.8258 15.3311 58.0744 15.4004 58.353 15.4004C58.63 15.4004 58.8778 15.3311 59.0966 15.1926C59.3169 15.0526 59.4901 14.848 59.616 14.5789C59.7434 14.3082 59.8072 13.9761 59.8072 13.5826ZM61.439 16V11.1653H63.1623C63.5369 11.1653 63.8477 11.2298 64.0948 11.3589C64.3435 11.4879 64.5292 11.6665 64.6519 11.8947C64.7747 12.1214 64.8361 12.3834 64.8361 12.6809C64.8361 12.9767 64.7739 13.2372 64.6496 13.4622C64.5268 13.6857 64.3411 13.8596 64.0924 13.984C63.8453 14.1083 63.5345 14.1705 63.16 14.1705H61.8545V13.5425H63.0939C63.3299 13.5425 63.5219 13.5087 63.6699 13.441C63.8194 13.3733 63.9288 13.275 63.998 13.1459C64.0672 13.0169 64.1019 12.8618 64.1019 12.6809C64.1019 12.4983 64.0665 12.3401 63.9956 12.2064C63.9264 12.0726 63.817 11.9703 63.6675 11.8995C63.5196 11.8271 63.3252 11.7909 63.0844 11.7909H62.1685V16H61.439ZM63.8257 13.8187L65.0202 16H64.1892L63.0183 13.8187H63.8257ZM65.7237 16V11.1653H66.4531V13.4741H66.5121L68.54 11.1653H69.4583L67.5084 13.3419L69.4654 16H68.5872L67.0244 13.84L66.4531 14.4962V16H65.7237ZM27.2655 25V20.1653H30.2636V20.7932H27.995V22.2663H30.0488V22.8919H27.995V25H27.2655ZM35.3604 22.5826C35.3604 23.0989 35.2659 23.5427 35.0771 23.9141C34.8882 24.2839 34.6293 24.5688 34.3004 24.7687C33.9731 24.967 33.6009 25.0661 33.1838 25.0661C32.7652 25.0661 32.3914 24.967 32.0625 24.7687C31.7351 24.5688 31.477 24.2831 31.2882 23.9117C31.0993 23.5403 31.0049 23.0973 31.0049 22.5826C31.0049 22.0664 31.0993 21.6234 31.2882 21.2536C31.477 20.8822 31.7351 20.5973 32.0625 20.399C32.3914 20.1991 32.7652 20.0992 33.1838 20.0992C33.6009 20.0992 33.9731 20.1991 34.3004 20.399C34.6293 20.5973 34.8882 20.8822 35.0771 21.2536C35.2659 21.6234 35.3604 22.0664 35.3604 22.5826ZM34.638 22.5826C34.638 22.1892 34.5743 21.8579 34.4468 21.5888C34.3209 21.3181 34.1478 21.1135 33.9274 20.975C33.7087 20.8349 33.4608 20.7649 33.1838 20.7649C32.9052 20.7649 32.6566 20.8349 32.4378 20.975C32.2191 21.1135 32.0459 21.3181 31.9185 21.5888C31.7926 21.8579 31.7296 22.1892 31.7296 22.5826C31.7296 22.9761 31.7926 23.3082 31.9185 23.5789C32.0459 23.848 32.2191 24.0526 32.4378 24.1926C32.6566 24.3311 32.9052 24.4004 33.1838 24.4004C33.4608 24.4004 33.7087 24.3311 33.9274 24.1926C34.1478 24.0526 34.3209 23.848 34.4468 23.5789C34.5743 23.3082 34.638 22.9761 34.638 22.5826ZM39.3789 20.1653H40.1107V23.3452C40.1107 23.6835 40.0312 23.9833 39.8723 24.2446C39.7133 24.5043 39.4898 24.7088 39.2018 24.8584C38.9138 25.0063 38.5762 25.0803 38.1891 25.0803C37.8035 25.0803 37.4667 25.0063 37.1787 24.8584C36.8907 24.7088 36.6672 24.5043 36.5083 24.2446C36.3493 23.9833 36.2698 23.6835 36.2698 23.3452V20.1653H36.9993V23.2861C36.9993 23.5049 37.0473 23.6993 37.1433 23.8692C37.2409 24.0392 37.3786 24.173 37.5564 24.2705C37.7342 24.3665 37.9451 24.4145 38.1891 24.4145C38.4346 24.4145 38.6463 24.3665 38.8241 24.2705C39.0035 24.173 39.1404 24.0392 39.2349 23.8692C39.3309 23.6993 39.3789 23.5049 39.3789 23.2861V20.1653ZM45.0735 20.1653V25H44.403L41.9455 21.4542H41.9007V25H41.1712V20.1653H41.8464L44.3062 23.7158H44.3511V20.1653H45.0735ZM47.7027 25H46.1375V20.1653H47.7523C48.226 20.1653 48.6328 20.2621 48.9727 20.4557C49.3127 20.6477 49.5731 20.9239 49.7541 21.2843C49.9367 21.6431 50.028 22.0735 50.028 22.5756C50.028 23.0792 49.9359 23.512 49.7518 23.8739C49.5692 24.2359 49.3048 24.5145 48.9586 24.7096C48.6123 24.9032 48.1937 25 47.7027 25ZM46.867 24.3626H47.6626C48.0308 24.3626 48.3369 24.2934 48.5809 24.1549C48.8248 24.0148 49.0074 23.8126 49.1286 23.5482C49.2497 23.2822 49.3103 22.958 49.3103 22.5756C49.3103 22.1963 49.2497 21.8744 49.1286 21.61C49.0089 21.3456 48.8303 21.145 48.5927 21.0081C48.355 20.8711 48.0599 20.8027 47.7074 20.8027H46.867V24.3626ZM51.1033 25H50.329L52.0688 20.1653H52.9116L54.6514 25H53.8771L52.5103 21.0435H52.4725L51.1033 25ZM51.2331 23.1067H53.7449V23.7205H51.2331V23.1067ZM54.5399 20.7932V20.1653H58.2816V20.7932H56.7731V25H56.046V20.7932H54.5399ZM59.8379 20.1653V25H59.1084V20.1653H59.8379ZM65.0999 22.5826C65.0999 23.0989 65.0054 23.5427 64.8166 23.9141C64.6277 24.2839 64.3688 24.5688 64.0399 24.7687C63.7126 24.967 63.3404 25.0661 62.9233 25.0661C62.5047 25.0661 62.1309 24.967 61.802 24.7687C61.4746 24.5688 61.2165 24.2831 61.0277 23.9117C60.8388 23.5403 60.7444 23.0973 60.7444 22.5826C60.7444 22.0664 60.8388 21.6234 61.0277 21.2536C61.2165 20.8822 61.4746 20.5973 61.802 20.399C62.1309 20.1991 62.5047 20.0992 62.9233 20.0992C63.3404 20.0992 63.7126 20.1991 64.0399 20.399C64.3688 20.5973 64.6277 20.8822 64.8166 21.2536C65.0054 21.6234 65.0999 22.0664 65.0999 22.5826ZM64.3775 22.5826C64.3775 22.1892 64.3137 21.8579 64.1863 21.5888C64.0604 21.3181 63.8872 21.1135 63.6669 20.975C63.4482 20.8349 63.2003 20.7649 62.9233 20.7649C62.6447 20.7649 62.3961 20.8349 62.1773 20.975C61.9586 21.1135 61.7854 21.3181 61.658 21.5888C61.5321 21.8579 61.4691 22.1892 61.4691 22.5826C61.4691 22.9761 61.5321 23.3082 61.658 23.5789C61.7854 23.848 61.9586 24.0526 62.1773 24.1926C62.3961 24.3311 62.6447 24.4004 62.9233 24.4004C63.2003 24.4004 63.4482 24.3311 63.6669 24.1926C63.8872 24.0526 64.0604 23.848 64.1863 23.5789C64.3137 23.3082 64.3775 22.9761 64.3775 22.5826ZM69.9116 20.1653V25H69.2411L66.7836 21.4542H66.7388V25H66.0093V20.1653H66.6845L69.1443 23.7158H69.1892V20.1653H69.9116Z"
                fill="#888888"
              />
            </svg>
            `
            }
          </div>
          <div style="color: #888888;">
            <span style="font-size: 12px; color: #888888 !important;" class="">Page </span>
            <span style="font-size: 12px; color: #888888 !important;" class="pageNumber"></span>
          </div>
        </div>
      `;
  };
}

export default AuditTemplates;
