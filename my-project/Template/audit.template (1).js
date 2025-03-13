/* eslint-disable max-len */
class AuditTemplates {
  /** @type {AuditTemplates} */
  static instance = null;

  #getAuditReportDate(isoDate) {
    const date = new Date(isoDate);
    const monthNames = [
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
    return `${monthNames[
      date.getUTCMonth()
    ].toUpperCase()} ${date.getUTCFullYear()}`;
  }

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

  static getInstance() {
    if (!AuditTemplates.instance) {
      AuditTemplates.instance = new AuditTemplates();
    }
    return AuditTemplates.instance;
  }

  /**
   * Generate body template for audit status report
   */
  generateBodyTemplateForAuditStatusReport = ({
    organization,
    domains,
    audit,
    risks,
    areas,
  }) => {
    const taskStatus = (totalTask, completedTask) => {
      return Math.round((completedTask / totalTask) * 100);
    };
    const formattedText = (text) => {
      const segments = text.split("**");
      return `<span>${segments
        .map((segment) => `<span>${segment.trim()}</span>`)
        .join("<br />")}</span>`;
    };

    const headers = {
      audit: [
        {
          name: "Audit name",
          value: audit.name,
        },
        {
          name: "Audit location",
          value: " audit.locations[0]",
        },
        {
          name: "Audit start date",
          value: audit.createdAt,
        },
        {
          name: "Audit end date",
          value: audit.createdAt,
        },
        {
          name: "Audit platform",
          value: "UNIFIED CONTROL FRAMEWORK FOUNDATION",
        },
        {
          name: "Audit platform URL",
          value: "www.ucfportal.com",
        },
      ],
      organization: [
        {
          name: "Company name",
          value: organization.name,
        },
        {
          name: "Vertical",
          value: organization.vertical.name,
        },
        {
          name: "Company URL",
          value: organization.url,
        },
        {
          name: "Company admin",
          value: organization.admin.name,
        },
        {
          name: "Phone no",
          value: organization.admin.phone,
        },
        {
          name: "Email",
          value: organization.admin.email,
        },
      ],
      auditor: [
        {
          name: "Auditor name",
          value: audit.creator.name,
        },
        {
          name: "Phone no",
          value: audit.creator.phone,
        },
        {
          name: "Email",
          value: audit.creator.email,
        },
      ],
    };

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
            padding: 0px
          }
          body {
            font-family: "Inter", sans-serif;
              overflow-x: hidden; /* Hides horizontal overflow */
 
          }
          @page:first {
             margin-top: 0
          }
          #report_footer {
             display: none
          }
          .domain-title {
            font-size: 20px;
            color: #1D1D1D;
            font-weight: 700;
            margin-bottom: 20px;
          }
          .area-title {
            font-size: 12px;
            color: #333;
            padding: 12px 0px;
            font-weight: 600
          }
          .control-container {
            display: flex;
            flex-direction: row;
            font-weight: 500;
          }
          .control-info {
            width: 45%;
            padding: 10px;
            border-right: 1px solid #E1E1E1;
            border-bottom: 1px solid #E1E1E1;
            display:flex;
            flex-direction: column;
            gap:6px;
          }
          .control-info .control-id {
            font-size: 12px;
            color: #888;
          }
          .control-id{
            margin-bottom: 2px
          }
          .control-info .control-details {
            font-size: 10px;
            color: #1D1D1D;
          }
          .control-container-parent:first-child {
            border-top: 1px solid red;
          }
          .control-header{
            display: flex;
            align-items: center;
            background-color: #F6F9FC;
            font-weight: 600;
            color: #1D1D1D;
            font-size: 12px;
            padding: 10px 0px;
            margin-top: 10px
          }
          .control-header>div{
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: 10px
            
          }
          .body{
            overflow: hidden
          }
          .tasks-container {
            width: 65%;
            border-bottom: 1px solid #E1E1E1;
            display: flex;
            flex-direction: column;
          }
          .task-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            border-bottom: 1px solid #E1E1E1;
            flex-grow: 1;
          }
          .task-cell {
            border-right: 1px solid #E1E1E1;
            padding: 10px;
            font-size: 10px;
            color: #1D1D1D;
    
         
          
          }
          .task-cell:last-child {
            border-right: none;
          
          }
          .task-title {
            font-size: 12px;
            color: #888;
            margin-bottom:2px
          }
          .toc-title {
            padding-bottom: 20px;
            font-weight: 700;
            color: #1D1D1D;
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
            border-bottom: 0.5px solid #E1E1E1;
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
            color: #1D1D1D;
          }
          .level-2 {
            font-size: 14px;
            line-height: 14px;
            font-weight: 600;
            color: #4A4A4A;
            margin-left: 20px;
          }
          .level-3 {
            font-size: 14px;
            line-height: 14px;
            font-weight: 500;
            color: #4A4A4A;
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

      <div style="position: relative;  height: 100%; overflow-x: hidden; page-break-after: always;">
        <div style="padding: 60px 80px 40px 80px">
          <div style="display: flex; align-items: center; gap:11.5px">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="35" viewBox="0 0 28 35" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.23234 9.78933V3.87932C9.38189 0.0961976 15.6067 0.877254 15.6067 0.877254V5.77088C7.99908 4.82511 5.23234 9.78933 5.23234 9.78933ZM0.0772186 5.57598L5.13132 9.76184V21.4517L5.13066 21.4637C5.08576 22.2988 5.12482 23.9627 6.12515 25.5748C6.72663 26.5435 7.57817 27.3349 8.59507 27.9105L8.57259 25.2518L8.51039 17.8984L8.50997 17.8484L8.51127 17.7983C8.64743 12.544 12.9455 8.35437 18.2023 8.35437H21.5999V14.1815H18.2023C16.1201 14.1815 14.4143 15.8296 14.3377 17.9061L14.3994 25.2025L14.4311 28.9422C14.9275 28.9061 15.5906 28.8203 16.3178 28.6252C17.7802 28.2329 19.4629 27.4096 20.5947 25.6973C21.3157 24.6059 21.4739 23.3289 21.7042 21.4696L21.7363 21.2106C22.0022 19.0734 21.9132 17.2889 21.7891 16.0913L21.7402 15.62L26.8591 15.3754L26.9031 15.7969C27.0192 16.9083 27.1238 18.5068 27.026 20.4226L27.0235 20.4703C26.9173 22.5371 26.7706 25.3921 25.7265 27.6058C24.7028 29.774 22.777 31.4339 20.5419 32.5408C18.3051 33.6484 15.7253 34.2198 13.3394 34.1885C8.53655 34.1255 2.88627 31.6145 0.806912 26.8151C0.645068 26.441 0.513492 26.0746 0.407753 25.721C0.118969 24.7532 -0.00452624 23.7493 0.000126546 22.7521L0.0772186 5.57598Z" fill="#1E3888"/>
                </svg>
            </div>
            <div style="width:94px; height:39px; font-size:9.605px; color:#888888; font-weight:500">
              UNIFIED CONTROLS FRAMEWORK FOUNDATION
            </div>
          </div>
          <div style="margin-top: 32px; font-size: 64px; font-weight: 700">
            <div style="color: #1E3888; z-index: 200;">${audit.name}</div>
            <div style="color: #1D1D1D; z-index: 200 !important;">Audit Status Report</div>
          </div>
          <div style="margin-top: 8px; font-size: 16px; font-weight: 600; color: #888888">
            ${this.#getAuditReportDate(audit.createdAt)}
          </div>
        </div>

        <div style="position: absolute; top: 0; right: 0; z-index: -1">
          <svg width="600" height="840" viewBox="0 0 364 594" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M93.3906 159.658V54.5681C167.331 -12.7023 278.252 1.18616 278.252 1.18616V88.2033C142.691 71.3857 93.3906 159.658 93.3906 159.658ZM1.51658 84.7287L91.5754 159.161V367.026L91.5638 367.24C90.7636 382.09 91.4597 411.676 109.284 440.341C119.798 457.24 134.599 471.102 152.263 481.285L151.867 434.609L150.759 303.854L150.751 302.942L150.775 302.03C153.22 207.871 230.372 132.972 324.512 132.972H385.054V238.911H324.512C287.886 238.911 258.056 267.807 256.703 303.998L257.802 433.711L258.365 500.139C267.081 499.452 278.469 497.914 290.908 494.584C316.965 487.608 346.949 472.969 367.117 442.52C379.965 423.113 382.783 400.405 386.887 367.345C387.074 365.832 387.265 364.296 387.459 362.739C392.198 324.736 390.611 293.005 388.399 271.71L387.528 263.329L478.742 258.981L479.526 266.474C481.594 286.238 483.459 314.66 481.716 348.727L481.715 348.73L481.672 349.576C479.779 386.327 477.165 437.094 458.559 476.458L458.557 476.461C440.316 515.015 406.003 544.527 366.175 564.209C326.319 583.904 280.35 594.065 237.835 593.51C152.253 592.389 51.5709 547.739 14.519 462.398L14.5172 462.394C11.6334 455.741 9.29052 449.23 7.40637 442.941L7.40514 442.937C2.25929 425.729 0.059972 407.882 0.14288 390.15L1.51658 84.7287Z" fill="#F6F9FC"/>
          </svg>
        </div>

        <div style="padding: 80px; background-color: #F6F9FC; position: absolute; bottom: 0; left: 0; right: 0; z-index: 99999 !important">
          <div style="display: flex; align-items: center">
            <div style="width: 100%">
              <div style="font-size: 12px; color: #888; font-weight: 500; margin-bottom: 10px">ORGANIZATION</div>
              <div style="font-size: 18px; color: #1D1D1D; font-weight: 600">${
                organization.name
              }</div>
            </div>
            <div style="width: 100%">
              <div style="font-size: 12px; color: #888; font-weight: 500; margin-bottom: 10px;">AUDITOR</div>
              <div style="font-size: 18px; color: #1D1D1D; font-weight: 600">${
                audit.creator.name
              }</div>
            </div>
          </div>
        </div>
      </div>


    <!-- -------------------------------------- Table Of Contents --------------------------------------  -->
        <div style="padding: 0px 20px; page-break-after: always;">
          <div id="heading" class="domain-title">Table of contents</div>
          <div id="toc-columns" class="toc-columns"></div>
        </div>
    <!-- ----------------------------------- End Of Table Of Contents ----------------------------------  -->


    <!-- ---------------------------------------- Audit details ----------------------------------------  -->
        <div style="padding: 0px 20px; page-break-after: always;">
          <h1 id="heading" class="domain-title">1. Audit details</h1>
          <div style="display: flex; gap: 16px; width: 100%; font-weight: 500;">
            <div style="width: 100%;">
              <div style="background-color: #f6f9fc; padding: 10px; font-size: 14px; font-weight: 600; color: #1d1d1d;">Audit info</div>
              <div>
                ${headers.audit
                  .map(
                    ({ name, value }) => /*html*/ `
                      <div style="padding: 8px 12px; font-size: 10px;">
                        <p style="color: #888; margin-bottom: 4px;">${name}</p>
                        <p style="color: #1d1d1d;">${value || "NA"}</p>
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
                    ({ name, value }) => /*html*/ `
                    <div style="padding: 8px 12px; font-size: 10px;">
                      <p style="color: #888; margin-bottom: 4px;">${name}</p>
                      <p style="color: #1d1d1d;">${value || "NA"}</p>
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
    <!-- ------------------------------------ End Of Audit details ------------------------------------  -->


    <!-- ---------------------------------- Compliances Visualization ------------------------------------  -->
        <div style="font-weight: 500; padding: 0px 20px; page-break-after: always;">
          <h1 id="heading" class="domain-title">2. Compliances Visualization</h1>
          <div style="display: flex; flex-direction: column; align-items: end; justify-content: end; margin-top: 20px;">
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
              (350 / risks.totalTasks) * risks.completedTasks
            }px; width:100%; background-color: #036666"></div>
            <div style="height: ${
              (350 / risks.totalTasks) * risks.noteWorthyEffortTasks
            }px; width:100%; background-color: #4CAF50"></div>
            <div style="height: ${
              (350 / risks.totalTasks) * risks.tasksInReview
            }px; width:100%; background-color: #1E3888"></div>
            <div style="height: ${
              (350 / risks.totalTasks) * risks.undefinedRiskTasks
            }px; width:100%; background-color: #D1E2F2"></div>
            <div style="height: ${
              (350 / risks.totalTasks) * risks.highRiskTasks
            }px; width:100%; background-color: #F44336"></div>
            <div style="height: ${
              (350 / risks.totalTasks) * risks.lowRiskTasks
            }px; width:100%; background-color: #FFC107"></div>
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
                risks.noteWorthyEffortTasks
              }</div>
              <div style="font-size: 12px; font-weight: 500; color: #888888;">Noteworthy Effort </div>
            </div>
            <div style="width: 100%;">
              <div style="font-size: 22px; font-weight: 700; color: #1d1d1d;">${
                risks.tasksInReview
              }</div>
              <div style="font-size: 12px; font-weight: 500; color: #888888;">Sent For Review</div>
            </div>
            <div style="width: 100%;">
              <div style="font-size: 22px; font-weight: 700; color: #1d1d1d;">${
                risks.undefinedRiskTasks
              }</div>
              <div style="font-size: 12px; font-weight: 500; color: #888888;">Risk Not Defined</div>
            </div>
            <div style="width: 100%;">
              <div style="font-size: 22px; font-weight: 700; color: #1d1d1d;">${
                risks.highRiskTasks
              }</div>
              <div style="font-size: 12px; font-weight: 500; color: #888888;">Major Non-Conformity</div>
            </div>
            <div style="width: 100%;">
              <div style="font-size: 22px; font-weight: 700; color: #1d1d1d;">${
                risks.lowRiskTasks
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
    <!-- ------------------------------ End Of Compliances Visualization ------------------------------  -->


    <!-- ------------------------------------- Summary of findings ------------------------------------  -->
        <div style="font-weight: 500; padding: 0px 20px; page-break-after: always;">
          <h1 id="heading" class="domain-title">3. Summary of findings</h1>
          <div style="background-color: #f6f9fc; padding: 10px 0px; font-size: 14px; font-weight: 600; color: #1d1d1d; display: flex; align-items: center;">
            <div style="width: 95%; padding-left: 10px;">Control area</div>
            <div style="width: 15%; padding-left: 10px;">Status</div>
          </div>
          ${areas
            .map(
              (area, areaIndex) => /*html*/ `
          <div style="display: flex; align-items: center; font-size: 10px; border-bottom: 1px solid #e1e1e1;">
            <div style="width:95%; padding: 12px;">${areaIndex + 1}. ${
                area.name
              }</div>
            <div style="width: 15%; padding: 12px;">
              
            <div style="display: flex; align-items: center; gap: 5px; color: #1d1d1d;">
            <div style="display: flex; width: 68px; height: 8px; padding: 1px; flex-direction: column; align-items: flex-start; gap: 6px; border-radius: 20px; background: var(--Surface-Primary, #c6f2f2); position: relative;">
              <div style="position: absolute; width: ${taskStatus(
                area.totalTasks,
                area.totalCompletedTasks
              )}%; padding: 1px; height: 8px; top: 0px; left: 0px; border-radius: 20px;">
                <div style="background-color: #036666; width: 100%; height: 100%; border-radius: 20px;"></div>
              </div>
            </div>
           ${
             area.totalTasks !== area.totalCompletedTasks
               ? `${taskStatus(area.totalTasks, area.totalCompletedTasks)}%`
               : "Completed"
           } 
          </div>

            </div>
          </div>
          `
            )
            .join("")}
        </div>
    <!-- ---------------------------------  End Of Summary of findings ---------------------------------  -->

        
    <!-- ---------------------------------  Observation and findings ---------------------------------  -->
      <div style=" padding: 0px 20px; page-break-after: always;">
        <h1 id="heading" class="domain-title">4. Observations and findings</h1>
          ${domains
            .map(
              (domain, domainIndex) => /*html*/ `
                <div style="padding-bottom: 20px">
                  <h2 id="sub_heading" class="domain-title">
                    4.${domainIndex + 1}. ${domain.name}
                  </h2>
                  ${domain.areas
                    .map(
                      (area, areaIndex) => /*html*/ `
                        <div>
                          <h3 id="small_heading" class="area-title">
                            4.${domainIndex + 1}.${areaIndex + 1}. ${area.name}
                          </h3>
                          ${
                            areaIndex === 0
                              ? /*html*/ `
                              <div class="control-header" >
                                <div style="width:150%">Control Details</div>
                                <div style="width:130%">Validation Task</div>
                                <div style="width:65%">Status</div>
                              </div>
                              `
                              : ""
                          }
                              <div style="border-top:1px solid  #E1E1E1" >${area.controls
                                .map(
                                  (control) => /*html*/ `
                                <div class="control-container">
                                  <div class="control-info">
                                    <p class="control-id">${control.name}</p>
                                    <p class="control-details">${formattedText(
                                      control.details
                                    )}</p>
                                  </div>
                                  <div class="tasks-container">
                                    ${control.tasks
                                      .map(
                                        (task, taskIndex) => /*html*/ `
                                          <div style= border: ${
                                            taskIndex ===
                                            control.tasks.length - 1
                                              ? "none"
                                              : ""
                                          }" class="task-grid">
                                            <div class="task-cell" style="word-wrap: break-word; overflow-wrap: anywhere; display:flex;flex-direction:column;gap:6px; width:390px;padding-bottom:20px; ">
                                              <p class="task-title" style="word-wrap: break-word; overflow-wrap: anywhere">${
                                                task.name
                                              }</p>
                                              <p style="word-wrap: break-word; overflow-wrap: anywhere">${formattedText(
                                                task.details
                                              )}</p>
                                            </div>
                                            <div class="task-cell" style=" display:flex; justify-content:center; align-item:center   " >
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
    <!-- --------------------------------- End of Observation and findings ---------------------------------  -->

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
                          <p class="toc-page level-\${entry.level}">\${entryIndex < 3 ? (entryIndex + 2 + tocPageCount) : Math.floor(((entry.position.y - (entryIndex)*61)/ 628) + tocPageCount)}</p>
                        </div>
                      </div>
                    \`).join('')}
                  \`;

          document.getElementById('toc-columns').innerHTML = tocContent;
        </script>
    </html>
    `;
  };
}

export default AuditTemplates;
