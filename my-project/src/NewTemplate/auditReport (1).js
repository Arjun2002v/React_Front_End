const data = {
  organization: {
    _id: "675bc103a7ded0ff0e1766cc",
    nxtId: "MU6WD27",
    uuid: "81224229-b68d-4f9a-b829-1c49bb2677aa",
    name: "Tech Solutions Pvt. Ltd.",
    phone: "9876543210",
    countryCode: "+91",
    email: "contact@techsolutions.com",
    pan: "ABCDE1234F",
    gst: "22ABCDE1234F1Z5",
    region: "South Asia",
    avatar: null,
    avatarPath: null,
    coi: {
      _id: "601d51e7b9f12b6a1a2e4c31",
      originalName: "Certificate_of_Incorporation.pdf",
      url: "https://example.com/uploads/coi.pdf",
      path: "/uploads/coi.pdf",
      fileType: "pdf",
      size: 20000,
    },
    authLetter: {
      _id: "601d51e7b9f12b6a1a2e4c32",
      originalName: "Authorization_Letter.pdf",
      url: "https://example.com/uploads/auth_letter.pdf",
      path: "/uploads/auth_letter.pdf",
      fileType: "pdf",
      size: 15000,
    },
    admin: {
      _id: "675bbda4d25735715b46500f",
      nxtId: "XCUN7QR",
      name: "Patrick Johnson",
      phone: "8917539050",
      email: "chandan.kumar@nxtgen.com",
      avatar: null,
    },
    vertical: {
      _id: "66c84f43569d0a9fb5c97bb9",
      name: "Government",
    },
    applicationStatus: {
      status: "approved",
      requestedAt: "2024-12-13T05:07:15.472Z",
      rejectedAt: null,
      approvedAt: "2024-12-19T05:47:59.443Z",
      updatedBy: "675bbda4d25735715b46500f",
      updateReason: "Status change requested",
    },
    member: {
      totalMembers: 2,
      totalAdmins: 1,
      totalUsers: 1,
      totalMentors: 0,
      totalInternalAuditors: 0,
      totalExternalAuditors: 0,
    },
    organizationStatus: {
      status: "active",
      joinedAt: "2024-12-19T05:47:59.443Z",
      activatedAt: "2024-12-13T06:33:08.025Z",
      disabledAt: null,
      updatedBy: "675bd045aa683d0daee1b69f",
      updateReason: "Status change requested",
    },
    subscription: {
      renewalDate: null,
      expirationDate: null,
      isActive: false,
    },
    softDelete: {
      isDeleted: false,
      deletedAt: null,
      deletedBy: null,
      deleteReason: null,
    },
    checklist: {
      underReview: -3,
      ongoing: 4,
      closed: 0,
      archived: 0,
    },
    audit: {
      ongoing: 4,
      closed: 0,
      archived: 0,
    },
    mentor: {
      _id: null,
      nxtId: null,
      name: null,
      phone: null,
      email: null,
      avatar: null,
      assignedAt: null,
      isMentorAssigned: false,
    },
    createdAt: "2024-12-13T05:07:15.484Z",
    updatedAt: "2025-02-12T10:14:40.809Z",
    __v: 0,
  },
  domains: [
    {
      _id: "679747ddbd3fad13f9c2f914",
      name: "Audit Management",
      areas: [
        {
          name: "Audit log Review",
          controls: [
            {
              name: "AUM-06",
              details:
                "The organisation periodically reviews audit logs and access reports of relevant users based on their risk level.",
              tasks: [
                {
                  name: "AUM-06-01",
                  details:
                    "Does the organisation periodically review audit logs and access reports of relevant users based on their risk level?",
                  observation:
                    "The organisation periodically reviews audit logs and access reports of relevant users based on their risk level.",
                  recommendation:
                    "The organisation periodically reviews audit logs and access reports of relevant users based on their risk level.",
                  taskStatus: {
                    status: "completed",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
              ],
            },
          ],
        },
        {
          name: "Privacy Monitoring and Auditing",
          controls: [
            {
              name: "AUM-01",
              details:
                "Periodic independent assurance audits are conducted by the organisation at least once a year to detect any non-compliance to organisational policies, procedures, and controls. The audit findings are communicated to relevant personnel and rectified.",
              tasks: [
                {
                  name: "AUM-01-02",
                  details:
                    "Are the findings from the periodic independent assurance audits communicated to relevant personnel within the organisation?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "completed",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "AUM-01-01",
                  details:
                    "Does the organisation conduct periodic independent assurance audits at least annually to assess compliance with its information security policies, procedures, and controls?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "AUM-01-03",
                  details:
                    "Does the organisation have a process for rectifying any non-compliance issues identified during the independent assurance audits?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "not_defined",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "note_worthy_effort",
                    riskUpdateBy: null,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      _id: "679747ddbd3fad13f9c2f912",
      name: "Business Continuity Planning and Disaster Management",
      areas: [
        {
          name: "Business Continuity Plan",
          controls: [
            {
              name: "BCD-01",
              details:
                "The organisation has created business continuity and disaster recovery plans in place reviewed and approved by the management. Roles and responsibilities are clearly defined within an emergency response structure and resources are made available for recovery of critical functions. Regular review is conducted by the third line of defence (Audit Function) as per the ORMF.**The BCP contains the following:**a. Business impact analysis**b. Business continuity strategy/plan**c. Emergency response plan**d. BCP testing reports",
              tasks: [
                {
                  name: "BCD-01-04",
                  details:
                    "Do the BCDR plans include a business impact analysis (BIA) that identifies critical business functions and their recovery time objectives (RTOs) and recovery point objectives (RPOs)?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "low",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: "2025-02-13T08:39:15.493Z",
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "minor_non_conformity",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-01-03",
                  details:
                    "Is there a regular review being done by the third line of defence as mentioned in the ORMF?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "completed",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "completed",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-01-01",
                  details:
                    "Does the organisation have management approved and documented business continuity (BC) and disaster recovery (DR) plans?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "review",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "low",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-01-06",
                  details:
                    "Do the BCDR plans include a detailed emergency response plan that outlines actions to be taken during a disaster or other disruptive event?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-01-02",
                  details:
                    "Are they regularly reviewed and approved by management and BoD?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "review",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "low",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-06-01",
                  details:
                    "Does the organisation conduct a business criticality assessment to identify and prioritize critical systems for disaster recovery efforts?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-01-05",
                  details:
                    "Do the BCDR plans outline a comprehensive business continuity strategy to ensure the recovery of critical business functions in the event of a disruption?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-06-02",
                  details:
                    "Does the organisation's disaster recovery plan address the recovery of non-critical or supporting systems, with acceptable tolerance levels defined for their downtime?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-05-01",
                  details:
                    "Does the organisation conduct periodic testing of its business continuity and disaster recovery plans to assess their effectiveness and identify areas for improvement?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-05-02",
                  details:
                    "Following the periodic testing of the BCDR plans, does the organisation update the plans as necessary based on the test results to ensure their continued effectiveness?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
              ],
            },
            {
              name: "BCD-05",
              details:
                "Periodic business continuity and disaster recovery tests are performed, and plans are updated if required.",
              tasks: [],
            },
            {
              name: "BCD-06",
              details:
                "The organisation has assessed and identified the business criticality of its systems to be prioritised during a disaster. Non-critical or supporting systems are also identified and recovery is planned with acceptable tolerance levels.",
              tasks: [],
            },
          ],
        },
        {
          name: "Interconnections and Interdependencies",
          controls: [
            {
              name: "BCD-02",
              details:
                "Once an RE has identified its critical operations, it should map the internal and external interconnections and interdependencies that are necessary for the delivery of critical operations consistent with its approach to operational resilience.",
              tasks: [
                {
                  name: "BCD-03-01",
                  details:
                    "Are the definitions of critical operations and critical third party service providers, as per the organisation's operational resilience approach, in harmony with their respective recovery and resolution plans?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-02-03",
                  details:
                    "Are third parties and intragroup arrangements also included in the connections and dependencies of identified critical operations?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-04-02",
                  details:
                    "Are there mechanisms or procedures in place to ensure that any risks arising from group companies of the organisation are not disrupting the critical operations of the organisation?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "minor_non_conformity",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-04-01",
                  details:
                    "Have all potential risks arising from group companies of the organisation been identified and documented?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-02-02",
                  details:
                    "Are there procedures in place to map any interconnections and interdependencies to the identified critical operations, like people, technology, processes, information, facilities etc.?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-04-03",
                  details: "Are there possible single points of failure?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-02-04",
                  details:
                    "Have the any and all interconnections and interdependencies been mapped to their respective critical operations?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-04-04",
                  details:
                    "Are there appropriate controls to safeguard against those single points of failure?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "BCD-02-01",
                  details:
                    "Have all the critical operations of the organisation been identified and documented?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
              ],
            },
            {
              name: "BCD-03",
              details:
                "REs may leverage their recovery and resolution plans, as appropriate, for definitions of critical operations and should consider whether their operational resilience approaches are appropriately harmonised with those of the organisational mappings of critical operations and critical third-party service providers as contained in their respective recovery and resolution plans.",
              tasks: [],
            },
            {
              name: "BCD-04",
              details:
                "Where an RE is a member of a group, it must ensure that any additional risks arising elsewhere in the group are accounted for that may affect its ability to tackle with a severe but plausible disruption to its operations.",
              tasks: [],
            },
          ],
        },
      ],
    },
    {
      _id: "679747ddbd3fad13f9c2f915",
      name: "Capacity Management",
      areas: [
        {
          name: "Capacity and Management",
          controls: [
            {
              name: "CMA-01",
              details:
                "The availability of adequate capacity and resources is planned, prepared, and managed to deliver the required system performance. Projections of future capacity requirements are made to mitigate the risk of system overload. Maximum optimization of resources is ensured to maximize business value.",
              tasks: [
                {
                  name: "CMA-01-01",
                  details:
                    "Is system performance planned and managed to meet resource capacity needs?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "CMA-01-02",
                  details:
                    "Are future capacity needs forecasted to prevent system overload?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      _id: "679747ddbd3fad13f9c2f911",
      name: "Change Management",
      areas: [
        {
          name: "Change Control Procedures",
          controls: [
            {
              name: "CHM-01",
              details:
                "An approved change management policy is in place and all the changes to the organisation's information system and procedures are handled through it. It includes the following-**- Reason and description**- Impact in security system description and approval of any change in documentation by authorized parties.**- Testing to ensure that system is not affected by any incident.**- Methods to bring the system in secure state after mentioning the issues.",
              tasks: [
                {
                  name: "CHM-01-04",
                  details:
                    "Are there methods mentioned in the policy recover the system to a secure state if issues arise after changes are made?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "CHM-01-03",
                  details:
                    "As per the policy, is testing being done to ensure the system functions as expected after a change is implemented?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "CHM-01-01",
                  details:
                    "Is there an approved change management policy that includes a clear description and justification for any proposed change to the information system or procedure?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "CHM-01-02",
                  details:
                    "As per the policy, is a security assessment being performed to identify potential impacts on the system before approving changes to documentation?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      _id: "679747ddbd3fad13f9c2f918",
      name: "Contract Management",
      areas: [
        {
          name: "SLA",
          controls: [
            {
              name: "CRM-06",
              details:
                "The organisation has established SLAs with all its customers and third parties. It ensures that IT products, services and service levels meet current and future enterprise needs.",
              tasks: [
                {
                  name: "CRM-06-01",
                  details:
                    "Has the organisation established SLAs with its customers and third parties?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      _id: "679747ddbd3fad13f9c2f916",
      name: "Governance, Risk and Compliance",
      areas: [
        {
          name: "Information Security Policy",
          controls: [
            {
              name: "GRC-11",
              details:
                "Information Security Policy and Standard Operating Procedures(SOPs) are documented by appointed personnel, approved by management, published and is conveyed to all employees and relevant external parties and reviewed at least annually or in case there is a change in environment. The information security policy defines the requirements of the organisation, its third parties, and its customers towards organisation's information security.",
              tasks: [
                {
                  name: "GRC-11-03",
                  details:
                    "Has it been published and conveyed to all employees and relavant external parties?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "GRC-11-01",
                  details:
                    "Is there a documented information security policy with SOPs?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "GRC-11-04",
                  details:
                    "Is it reviewed at least annually or, in case of a change in environment, by management?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "GRC-11-02",
                  details: "Has it been approved by management?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
              ],
            },
          ],
        },
        {
          name: "Risk Management",
          controls: [
            {
              name: "GRC-07",
              details:
                "The organisation has a risk management policy in place that provides guidelines for risk assessment and risk mitigation for the organisation's information security posture. Risk assesments are performed annually or whenever there are changes and a risk treatmet plan is created. The assessment identifies and formally documents critical assets. Risk Mitigation strategies are a part of the Risk Management, and are monitored and tested regularly. Regular review of the Risk Management policy by BoD and Senior Management should be done to ensure its effectiveness and relevancy with industry best practices.",
              tasks: [
                {
                  name: "GRC-07-06",
                  details:
                    "Are there monitoring and testing mechanisms for the risk mitigation measures?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "GRC-07-02",
                  details: "Has the policy been implemented?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "GRC-07-03",
                  details:
                    "Are risk assessments performed at least annually or after changes?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "reviewing",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "GRC-07-01",
                  details:
                    "Is there a documented risk management policy in place?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "noteworthy_effort",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "GRC-07-08",
                  details:
                    "Does the Senior Management and BoD regularly review the risk management policy to evaluate its effectiveness?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "GRC-07-04",
                  details:
                    "Are critical assets identified after the risk assessments?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "GRC-07-05",
                  details:
                    "Are there appropriate risk mitigation methods consistent with the risk assessments?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "GRC-07-07",
                  details:
                    "Are the risk mitigation measure being monitored and tested regularly?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "GRC-07-09",
                  details:
                    "Are there appropriate plans and controls being implemented to maintain the integrity of critical information (Secure Storage, and offline back-up of data supporting critical operations) in the event of a cyber-event?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      _id: "679747ddbd3fad13f9c2f910",
      name: "Human Resource Management",
      areas: [
        {
          name: "Information Security Awareness, Education, and Training",
          controls: [
            {
              name: "HRM-07",
              details:
                "All employees of the organisation, and contractors and third-party users receive appropriate awareness training along with regular updates in organisational policies and procedures, in accordance with their job function. The annual training is adaptive such that new recruits receive mandatory programs and upper and middle management get annual tests / assessments. Training material is reviewed regularly and updated. organisations cybersecurity performance is improved in successive trainings and exercises.",
              tasks: [
                {
                  name: "HRM-07-04",
                  details:
                    "Is the Awareness training program material reviewed periodically and updated?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "HRM-07-03",
                  details:
                    "Has the awareness training program been completed by all employees, contractors and third parties respectively?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "HRM-07-01",
                  details:
                    "Is there an appropriate awareness training program relavant to the employees, contractors and third parties respectively, available and enforced?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "HRM-07-02",
                  details:
                    "Is there an attested document confirming the completion of the awareness training program, for example, a certificate?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      _id: "679747ddbd3fad13f9c2f913",
      name: "Incident Management",
      areas: [
        {
          name: "Incident Logging and Insights",
          controls: [
            {
              name: "INM-07",
              details:
                "The organisation maintains a register of personal data breaches and incidents.",
              tasks: [
                {
                  name: "INM-07-01",
                  details:
                    "Does the organisation maintain a register of personal data breaches and incidents?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
              ],
            },
          ],
        },
        {
          name: "Reporting the incidents and Weakness",
          controls: [
            {
              name: "INM-01",
              details:
                "Incidents to information security are detected and communicated to Management and relevant personnel for mitigation. Personnel are assigned to be available 24/7 to respond to incidents or breaches. Incident reporting channels and mechanisms are clearly defined and implemented.",
              tasks: [
                {
                  name: "INM-01-01",
                  details:
                    "Does the organisation have a process for detecting information security incidents?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "reviewing",
                    initiatedAt: null,
                    reviewedAt: "2025-02-12T07:01:39.295Z",
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: {
                      _id: "675bdaf23777eec9755023f1",
                      nxtId: "RIDZZRW",
                      name: "Parag Parikh",
                      phone: "7917539012",
                      email: "paragh.joy@nxtgen.com",
                      avatar: null,
                      role: "UCF_USER",
                    },
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "INM-01-02",
                  details:
                    "Are identified information security incidents reported to management and relevant personnel to facilitate mitigation efforts?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "INM-01-03",
                  details:
                    "Does the organisation have a documented incident response plan that includes assigning personnel to be available 24/7 for responding to security incidents or breaches?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
              ],
            },
          ],
        },
        {
          name: "Trend Analysis",
          controls: [
            {
              name: "INM-11",
              details:
                "Trend analysis of incident records are performed to have a better understanding of the threat model.",
              tasks: [
                {
                  name: "INM-11-01",
                  details:
                    "Are trend analyses of incident records performed to have a better understanding of the threat model?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "initiated",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      _id: "679747ddbd3fad13f9c2f917",
      name: "Third Party Risk Management",
      areas: [
        {
          name: "Outsourcing",
          controls: [
            {
              name: "TPR-01",
              details:
                "The organisation conducts a through risk analysis when evaluating the need to outsource critical processes to external vendors.",
              tasks: [
                {
                  name: "TPR-01-02",
                  details:
                    "Is the Procedure evaluated periodically to ensure relavancy and appropriateness?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "completed",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
                {
                  name: "TPR-01-01",
                  details:
                    "Is there a thorough risk assessment procedure in place when evaluating the need to outsource critical processes to external vendors?",
                  observation: null,
                  recommendation: null,
                  taskStatus: {
                    status: "completed",
                    initiatedAt: null,
                    reviewedAt: null,
                    completedAt: null,
                    initiatedBy: null,
                    reviewedBy: null,
                    completedBy: null,
                  },
                  riskFactors: {
                    risk: "none",
                    riskUpdateBy: null,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  audit: {
    _id: "679747ddbd3fad13f9c2f909",
    organizationId: "675bc103a7ded0ff0e1766cc",
    uniqueAuditReference: "AU200816",
    name: "2023 audit",
    type: "internal",
    scope:
      "The scope of an audit is the range of components that will be evaluated during an audit. It defines the areas, activities, time periods, and processes that will be examined.",
    conclusion: null,
    checklistIds: ["679746e6bd3fad13f9c2f894"],
    auditUserReferenceIds: ["679877daf9d05d32e5a3009c"],
    auditDepartmentReferenceIds: [],
    creator: {
      _id: "675bdaf23777eec9755023f1",
      nxtId: "RIDZZRW",
      name: "Parag Parikh",
      phone: "7917539012",
      email: "paragh.joy@nxtgen.com",
      avatar: null,
      role: "UCF_INTERNAL_AUDITOR",
    },
    locations: [
      {
        _id: "6761576ba1952db9fb71e213",
        organizationId: "675bc103a7ded0ff0e1766cc",
        addressLine1: "No. 1, Main Street",
        addressLine2: "Near Central Park",
        city: "mumbai",
        state: "maharashtra",
        country: "india",
        postalCode: "400001",
        geoLocation: {
          latitude: null,
          longitude: null,
        },
      },
    ],
    auditStatus: {
      status: "closed",
      lastUpdatedStatus: "closed",
      archivedAt: null,
      closedAt: "2025-02-21T06:46:08.902Z",
    },
    metadata: {
      highRiskIds: [],
      auditProgress: 7.41,
    },
    createdAt: "2025-01-27T08:46:21.008Z",
    updatedAt: "2025-02-21T06:46:08.902Z",
    __v: 0,
  },
  risks: {
    totalTasks: 1260,
    completedTasks: 754,
    tasksInReview: 754,
    highRiskTasks: 754,
    lowRiskTasks: 754,
    noteWorthyEffortTasks: 1,
    taskInWaiting: 754,
    undefinedRiskTasks: 51,
    scheduledTasks: 48,
  },
};
export default data;
