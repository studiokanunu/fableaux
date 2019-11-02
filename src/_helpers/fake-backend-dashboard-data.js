// Example of how backend API needs to send data
// const jsonDataFormatExample = 
// {
//     "failures": 
//         [{
//         "UserEmail": "Espinoza@contoso.com",
//         "DocGUID": "6AF04DF6-E138-4B7B-8451-BA7368429450",
//         "TimeStamp": "2019-10-09T20:13:40.863Z",
//         "Marker": {
//             "Name": "Russian Federation",
//             "Latitude": 55.644466,
//             "Logitude": 37.395744
//         }
//     }],
//     "users" : {
//         "Mcintosh@gmail.com": {
//             "User": {
//             "FirstName": "Christine",
//             "LastName": "Mcintosh"
//             }
//         }
//     },
//     "documents" : {
//         "6AF04DF6-E138-4B7B-8451-BA7368429450": {
//             "DocName": "World Cup Jersey-Top Secret24.pdf",
//             "DocType": "PDF",
//             "OwnerEmail": "Shaw@contoso.com"
//         }
//     }
// };




const fakeData = 
{
    "failures": 
        [{
        "UserEmail": "Espinoza@contoso.com",
        "DocGUID": "6AF04DF6-E138-4B7B-8451-BA7368429450",
        "TimeStamp": "2019-10-09T20:13:40.863Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 55.644466,
            "Logitude": 37.395744
        }
    },
        {
        "UserEmail": "Mathis@contoso.com",
        "DocGUID": "8FA71692-6A0F-439D-BF42-9E2B470C5F25",
        "TimeStamp": "2019-10-09T19:17:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 58.000001,
            "Logitude": 56.316666
        }
    },
        {
        "UserEmail": "Romero@contoso.com",
        "DocGUID": "25E0951A-CA28-4EAA-8D16-6D2A2BD09B55",
        "TimeStamp": "2019-10-09T17:17:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 54.733334,
            "Logitude": 56.000001
        }
    },
        {
        "UserEmail": "Marquez@contoso.com",
        "DocGUID": "F902D1DF-2284-44B0-B35F-8DC0279C02C9",
        "TimeStamp": "2019-10-09T19:16:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 47.233334,
            "Logitude": 39.700001
        }
    },
        {
        "UserEmail": "Fuller@contoso.com",
        "DocGUID": "86DB60C2-F172-4E94-B808-78EB310C4CE0",
        "TimeStamp": "2019-10-09T16:17:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 54.983334,
            "Logitude": 73.366669
        }
    },
        {
        "UserEmail": "Mclaughlin@contoso.com",
        "DocGUID": "CC0ACC8B-D98F-4059-AF49-6D52F3B8E10B",
        "TimeStamp": "2019-10-09T13:17:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 55.796391,
            "Logitude": 49.108891
        }
    },
        {
        "UserEmail": "Espinoza@contoso.com",
        "DocGUID": "6AF04DF6-E138-4B7B-8451-BA7368429450",
        "TimeStamp": "2019-10-09T12:17:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 55.644466,
            "Logitude": 37.395744
        }
    },
        {
        "UserEmail": "Mathis@contoso.com",
        "DocGUID": "6AF04DF6-E138-4B7B-8451-BA7368429450",
        "TimeStamp": "2019-10-09T11:17:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 55.644466,
            "Logitude": 37.395744
        }
    },
        {
        "UserEmail": "Mathis@contoso.com",
        "DocGUID": "6AF04DF6-E138-4B7B-8451-BA7368429450",
        "TimeStamp": "2019-10-09T15:16:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 58.000001,
            "Logitude": 56.316666
        }
    },
        {
        "UserEmail": "Romero@contoso.com",
        "DocGUID": "6AF04DF6-E138-4B7B-8451-BA7368429450",
        "TimeStamp": "2019-10-09T18:15:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 54.733334,
            "Logitude": 56.000001
        }
    },
        {
        "UserEmail": "Marquez@contoso.com",
        "DocGUID": "6AF04DF6-E138-4B7B-8451-BA7368429450",
        "TimeStamp": "2019-10-09T19:35:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 47.233334,
            "Logitude": 39.700001
        }
    },
        {
        "UserEmail": "Espinoza@contoso.com",
        "DocGUID": "8FA71692-6A0F-439D-BF42-9E2B470C5F25",
        "TimeStamp": "2019-10-09T19:44:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 55.644466,
            "Logitude": 37.395744
        }
    },
        {
        "UserEmail": "Mathis@contoso.com",
        "DocGUID": "8FA71692-6A0F-439D-BF42-9E2B470C5F25",
        "TimeStamp": "2019-10-09T11:10:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 58.000001,
            "Logitude": 56.316666
        }
    },
        {
        "UserEmail": "Romero@contoso.com",
        "DocGUID": "8FA71692-6A0F-439D-BF42-9E2B470C5F25",
        "TimeStamp": "2019-10-09T11:10:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 54.733334,
            "Logitude": 56.000001
        }
    },
        {
        "UserEmail": "Espinoza@contoso.com",
        "DocGUID": "25E0951A-CA28-4EAA-8D16-6D2A2BD09B55",
        "TimeStamp": "2019-10-09T10:10:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 55.644466,
            "Logitude": 37.395744
        }
    },
        {
        "UserEmail": "Marquez@contoso.com",
        "DocGUID": "25E0951A-CA28-4EAA-8D16-6D2A2BD09B55",
        "TimeStamp": "2019-10-09T20:17:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 47.233334,
            "Logitude": 39.700001
        }
    },
        {
        "UserEmail": "Espinoza@contoso.com",
        "DocGUID": "F902D1DF-2284-44B0-B35F-8DC0279C02C9",
        "TimeStamp": "2019-10-09T14:17:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 55.644466,
            "Logitude": 37.395744
        }
    },
        {
        "UserEmail": "Fuller@contoso.com",
        "DocGUID": "F902D1DF-2284-44B0-B35F-8DC0279C02C9",
        "TimeStamp": "2019-10-09T19:19:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 54.983334,
            "Logitude": 73.366669
        }
    },
        {
        "UserEmail": "Mclaughlin@contoso.com",
        "DocGUID": "86DB60C2-F172-4E94-B808-78EB310C4CE0",
        "TimeStamp": "2019-10-09T12:17:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 55.796391,
            "Logitude": 49.108891
        }
    },
        {
        "UserEmail": "Espinoza@contoso.com",
        "DocGUID": "CC0ACC8B-D98F-4059-AF49-6D52F3B8E10A",
        "TimeStamp": "2019-10-08T12:17:38.555Z",
        "Marker": {
            "Name": "Russian Federation",
            "Latitude": 55.644466,
            "Logitude": 37.395744
        }
   }],

   "users": {
    "Espinoza@contoso.com": {
       "User": {
          "FirstName": "Dion",
          "LastName": "Espinoza"
       }
    },
    "Mathis@contoso.com": {
       "User": {
          "FirstName": "Leta",
          "LastName": "Mathis"
       }
    },
    "Romero@contoso.com": {
       "User": {
          "FirstName": "Jocelyn",
          "LastName": "Romero"
       }
    },
    "Marquez@contoso.com": {
       "User": {
          "FirstName": "Jenny",
          "LastName": "Marquez"
       }
    },
    "Fuller@contoso.com": {
       "User": {
          "FirstName": "Doyle",
          "LastName": "Fuller"
       }
    },
    "Mclaughlin@contoso.com": {
       "User": {
          "FirstName": "Harriet",
          "LastName": "Mclaughlin"
       }
    },
    "Shaw@contoso.com": {
       "User": {
          "FirstName": "Morgan",
          "LastName": "Shaw"
       }
    },
    "Reid@contoso.com": {
       "User": {
          "FirstName": "Jonathan",
          "LastName": "Reid"
       }
    },
    "Rich@contoso.com": {
       "User": {
          "FirstName": "Amado",
          "LastName": "Rich"
       }
    },
    "Jennings@contoso.com": {
       "User": {
          "FirstName": "Colleen",
          "LastName": "Jennings"
       }
    },
    "Skinner@contoso.com": {
       "User": {
          "FirstName": "Stuart",
          "LastName": "Skinner"
       }
    },
    "Page@contoso.com": {
       "User": {
          "FirstName": "Rosanna",
          "LastName": "Page"
       }
    },
    "Martinez@contoso.com": {
       "User": {
          "FirstName": "Paula",
          "LastName": "Martinez"
       }
    },
    "Lopez@contoso.com": {
       "User": {
          "FirstName": "Raul",
          "LastName": "Lopez"
       }
    },
    "Petty@contoso.com": {
       "User": {
          "FirstName": "Clay",
          "LastName": "Petty"
       }
    },
    "Hudson@contoso.com": {
       "User": {
          "FirstName": "Demarcus",
          "LastName": "Hudson"
       }
    },
    "Yang@contoso.com": {
       "User": {
          "FirstName": "Oswaldo",
          "LastName": "Yang"
       }
    },
    "Avila@contoso.com": {
       "User": {
          "FirstName": "Alyson",
          "LastName": "Avila"
       }
    },
    "Chan@gigatrust.com": {
       "User": {
          "FirstName": "Corine",
          "LastName": "Chan"
       }
    },
    "Mercado@gigatrust.com": {
       "User": {
          "FirstName": "Dario",
          "LastName": "Mercado"
       }
    },
    "Todd@gigatrust.com": {
       "User": {
          "FirstName": "Milagros",
          "LastName": "Todd"
       }
    },
    "Kelley@gigatrust.com": {
       "User": {
          "FirstName": "Antwan",
          "LastName": "Kelley"
       }
    },
    "Byrd@gigatrust.com": {
       "User": {
          "FirstName": "Rubin",
          "LastName": "Byrd"
       }
    },
    "Holloway@gigatrust.com": {
       "User": {
          "FirstName": "Olivia",
          "LastName": "Holloway"
       }
    },
    "Werner@gigatrust.com": {
       "User": {
          "FirstName": "Graig",
          "LastName": "Werner"
       }
    },
    "Noble@gigatrust.com": {
       "User": {
          "FirstName": "Karla",
          "LastName": "Noble"
       }
    },
    "Stafford@gigatrust.com": {
       "User": {
          "FirstName": "Bradley",
          "LastName": "Stafford"
       }
    },
    "Hanson@gigatrust.com": {
       "User": {
          "FirstName": "Norberto",
          "LastName": "Hanson"
       }
    },
    "Nash@gigatrust.com": {
       "User": {
          "FirstName": "Constance",
          "LastName": "Nash"
       }
    },
    "Calhoun@gigatrust.com": {
       "User": {
          "FirstName": "Lena",
          "LastName": "Calhoun"
       }
    },
    "Wolfe@gigatrust.com": {
       "User": {
          "FirstName": "Adolfo",
          "LastName": "Wolfe"
       }
    },
    "Bush@gigatrust.com": {
       "User": {
          "FirstName": "Richie",
          "LastName": "Bush"
       }
    },
    "Petersen@gigatrust.com": {
       "User": {
          "FirstName": "Claudine",
          "LastName": "Petersen"
       }
    },
    "Hodge@gigatrust.com": {
       "User": {
          "FirstName": "Riley",
          "LastName": "Hodge"
       }
    },
    "Larson@gigatrust.com": {
       "User": {
          "FirstName": "Ramona",
          "LastName": "Larson"
       }
    },
    "Mckinney@gigatrust.com": {
       "User": {
          "FirstName": "Oliver",
          "LastName": "Mckinney"
       }
    },
    "Andrews@gmail.com": {
       "User": {
          "FirstName": "Cedrick",
          "LastName": "Andrews"
       }
    },
    "Kirk@gmail.com": {
       "User": {
          "FirstName": "Selena",
          "LastName": "Kirk"
       }
    },
    "Rivera@gmail.com": {
       "User": {
          "FirstName": "Fernando",
          "LastName": "Rivera"
       }
    },
    "Welch@gmail.com": {
       "User": {
          "FirstName": "Bonnie",
          "LastName": "Welch"
       }
    },
    "Wilkins@gmail.com": {
       "User": {
          "FirstName": "Erwin",
          "LastName": "Wilkins"
       }
    },
    "Malone@gmail.com": {
       "User": {
          "FirstName": "Guy",
          "LastName": "Malone"
       }
    },
    "Sherman@gmail.com": {
       "User": {
          "FirstName": "Dominick",
          "LastName": "Sherman"
       }
    },
    "Doyle@gmail.com": {
       "User": {
          "FirstName": "Jim",
          "LastName": "Doyle"
       }
    },
    "Ritter@gmail.com": {
       "User": {
          "FirstName": "Loretta",
          "LastName": "Ritter"
       }
    },
    "Zavala@gmail.com": {
       "User": {
          "FirstName": "Jacob",
          "LastName": "Zavala"
       }
    },
    "Mcintosh@gmail.com": {
       "User": {
          "FirstName": "Christine",
          "LastName": "Mcintosh"
       }
    }
 },

 "documents" : {
    "6AF04DF6-E138-4B7B-8451-BA7368429450": {
       "DocName": "World Cup Jersey-Top Secret24.pdf",
       "DocType": "PDF",
       "OwnerEmail": "Shaw@contoso.com"
    },
    "8FA71692-6A0F-439D-BF42-9E2B470C5F25": {
       "DocName": "Sitepoint-Top Secret24.jpg",
       "DocType": "JPG",
       "OwnerEmail": "Reid@contoso.com"
    },
    "25E0951A-CA28-4EAA-8D16-6D2A2BD09B55": {
       "DocName": "Engineering Roadmap-Secret24.xlsx",
       "DocType": "XLSX",
       "OwnerEmail": "Rich@contoso.com"
    },
    "F902D1DF-2284-44B0-B35F-8DC0279C02C9": {
       "DocName": "Salary Review Fuller-Confidential24.docx",
       "DocType": "DOCX",
       "OwnerEmail": "Jennings@contoso.com"
    },
    "86DB60C2-F172-4E94-B808-78EB310C4CE0": {
       "DocName": "Summary India Trip-Restricted24.docx",
       "DocType": "DOCX",
       "OwnerEmail": "Skinner@contoso.com"
    },
    "CC0ACC8B-D98F-4059-AF49-6D52F3B8E10B": {
       "DocName": "Job Descriptions-Unclassified24.docx",
       "DocType": "DOCX",
       "OwnerEmail": "Romero@contoso.com"
    },
    "CC0ACC8B-D98F-4059-AF49-6D52F3B8E10A": {
       "DocName": "Sitepoint Job Descriptions-Unclassified72.docx",
       "DocType": "DOCX",
       "OwnerEmail": "Martinez@contoso.com"
    }
 }};

export function getFakeBackendJSONDashboardData () {
    return fakeData;
}