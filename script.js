// Healthcare Data
const healthcareData = {
  HOSPITALS: {
    Sriharipuram: [
      {
        id: '1',
        name: "ST.ANN'S JUBILEE MEMORIAL HOSPITAL",
        rating: 3.3,
        address: "62-2-106, Jawahar Nagar Sriharipuram, post, Malkapuram, Visakhapatnam, Andhra Pradesh 530011",
        timings: "Mon-Fri 9:00 AM - 6:30 PM",
        contact: "089782 50530",
        website: "https://stanns-hospital.com"
      },
      {
        id: '2',
        name: "PAVAN SAI HOSPITAL",
        rating: 3.3,
        address: "64-1-44, Main Road High School Road, Road, Jawahar Nagar, Sriharipuram, Visakhapatnam, Andhra Pradesh 530011",
        timings: "Mon-Sun open 24 hours",
        contact: "080083 80083"
      },
      {
        id: '3',
        name: "DR D RAMA GANESH CHILDREN HOSPITAL",
        rating: 3.0,
        address: "64-1-30, High School Rd, Sriharipuram, Visakhapatnam, Andhra Pradesh 530011",
        timings: "Mon-Sun 10:30 AM - 1:00 PM and 7:00 PM - 10:00 PM",
        contact: "089127 09078"
      }
    ],
    Gajuwaka: [
      {
        id: '4',
        name: "GAJUWAKA GOVERNMENT HOSPITAL",
        rating: 3.8,
        address: "Gajuwaka, Visakhapatnam, Andhra Pradesh 530026",
        timings: "24 Hours",
        contact: "0891-2790123"
      },
      {
        id: '5',
        name: "CARE HOSPITALS GAJUWAKA",
        rating: 4.2,
        address: "Main Road, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026",
        timings: "24 Hours",
        contact: "0891-6712890"
      },
      {
        id: '6',
        name: "RK HOSPITAL",
        rating: 4.2,
        address: "Chinagantyada, Chaitanya Nagar, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026",
        timings: "Mon-Sun open 24 hours",
        contact: "089125 17599",
        website: "https://rkhospital.com"
      },
      {
        id: '7',
        name: "RISE HOSPITAL",
        rating: 5.0,
        address: "NH16, Chaitanya Nagar, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026",
        timings: "Mon-Sun open 24 hours",
        contact: "080080 00355",
        website: "https://risehospital.com"
      },
      {
        id: '8',
        name: "SUNRISE CHILDRENS HOSPITAL",
        rating: 4.6,
        address: "8-11-8 1st floor, Lata hospital building, Old Gajuwaka, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026",
        timings: "Mon-Sun 10:00 AM - 1:00 PM and 7:00 PM - 10:00 PM",
        contact: "092402 22222"
      },
      {
        id: '9',
        name: "PADMAJA HOSPITAL",
        rating: 2.9,
        address: "7-15-12, SRMT Canteen Rd, behind 38 Bus Stop, Chittinaidu Colony, Old Gajuwaka, Chaitanya Nagar, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026",
        timings: "Mon-Sun open 24 hours",
        contact: "089125 15648"
      }
    ],
    Sheelanagar: [
      {
        id: '10',
        name: "KIMS-ICON HOSPITAL",
        rating: 4.5,
        address: "Kim's Icon Hospital Road, Sheela Nagar, Visakhapatnam, Andhra Pradesh 530012",
        timings: "Mon-Sun open 24 hours",
        contact: "08913536379",
        website: "https://kimshospitals.com"
      },
      {
        id: '11',
        name: "RISE HOSPITAL",
        rating: 5.0,
        address: "NH16, Chaitanya Nagar, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026",
        timings: "Mon-Sun open 24 hours",
        contact: "080080 00355",
        website: "https://risehospital.com"
      },
      {
        id: '12',
        name: "KIMS CUDDLES HOSPITAL",
        rating: 4.7,
        address: "(KIMS-ICON Hospital Campus) Sheela Nagar, Post, BHPV Twp, Visakhapatnam, Andhra Pradesh 530012",
        timings: "Mon-Sun open 24 hours",
        contact: "0891 353 6379",
        website: "https://kimshospitals.com"
      },
      {
        id: '13',
        name: "AADITYAA HOSPITAL",
        rating: 4.6,
        address: "1-1-3, near pump house, Akkireddy palem, Visakhapatnam, Andhra Pradesh 530012",
        timings: "Mon-Sat open 24 hours, Sun 8:00 AM - 4:30 PM",
        contact: "0891-2890123"
      }
    ],
    Duvvada: [
      {
        id: '14',
        name: "VISAKHA HOSPITAL",
        rating: 4.4,
        address: "31-55-58/2, Duvvada Railway Station Rd, Kurmannapalem, Visakhapatnam, Andhra Pradesh 530046",
        timings: "Mon-Sun open 24 hours",
        contact: "070754 83934",
        website: "https://visakha-hospital.com"
      },
      {
        id: '15',
        name: "DR. YSR URBAN PRIMARY HEALTH CENTRE",
        rating: 4.5,
        address: "Railway Station Area, 3-84, Duvvada Rd, Duvvada, Kurmannapalem, Visakhapatnam, Andhra Pradesh 530046",
        timings: "Mon-Sun 9:00 AM - 5:00 PM",
        contact: "0891 275 8888"
      },
      {
        id: '16',
        name: "STAR 9 HOSPITALS",
        rating: 4.8,
        address: "NH16, Near Railway Station, Duvvada, Visakhapatnam, Andhra Pradesh 530046",
        timings: "Mon-Sun open 24 hours",
        contact: "091212 34567"
      }
    ],
    Visakhapatnam: [
      {
        id: '17',
        name: "KING GEORGE HOSPITAL",
        rating: 4.1,
        address: "Maharanipeta, Visakhapatnam, Andhra Pradesh 530002",
        timings: "24 Hours",
        contact: "0891-2565353"
      },
      {
        id: '18',
        name: "APOLLO HOSPITALS",
        rating: 4.5,
        address: "Arilova, Visakhapatnam, Andhra Pradesh 530040",
        timings: "24 Hours",
        contact: "0891-6712345",
        website: "https://apollohospitals.com"
      }
    ]
  },
  TESTCENTRES: {
    Sriharipuram: [
      {
        id: '19',
        name: "PRANA HEALTH CENTRE",
        rating: 4.1,
        address: "Main Road, opp. Ganesh Mandir Street, Gulalapalam Colony, Sriharipuram, Visakhapatnam, Andhra Pradesh 530011",
        timings: "Mon-Sun 6:00 AM - 2:00 PM and 4:30 PM - 11:00 PM",
        contact: "082332 33433"
      },
      {
        id: '20',
        name: "LALITHA MEDICAL CENTRE",
        rating: 3.0,
        address: "Main Road, 62, 1-10, Ganesh Mandir St, Sriharipuram, Visakhapatnam, Andhra Pradesh 530011",
        timings: "Mon-Sun open 24 hours",
        contact: "089444 55666"
      },
      {
        id: '21',
        name: "COROMANDEL MEDICAL CENTRE",
        rating: 4.9,
        address: "Near Coromandal Gate, Sriharipuram, Visakhapatnam, Andhra Pradesh 530011",
        timings: "Mon-Sun 8:00 AM - 9:00 PM",
        contact: "091234 98765"
      }
    ],
    Gajuwaka: [
      {
        id: '22',
        name: "APEXO DIAGNOSTICS",
        rating: 4.8,
        address: "8-16-22, Opp. Sivaji Park, Chaitanya Nagar, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026",
        timings: "Mon-Sun 7:00 AM - 9:00 PM",
        contact: "096407 55556"
      },
      {
        id: '23',
        name: "VIJAYA DIAGNOSTIC CENTRE",
        rating: 4.9,
        address: "8-20-4, Opp.Old Gajuwaka, Near Reliance Fresh, Chaitanya Nagar, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026",
        timings: "Mon-Sun 6:00 AM - 10:00 PM",
        contact: "091216 15599"
      },
      {
        id: '24',
        name: "APPLE SCANS AND DIAGNOSTICS",
        rating: 4.8,
        address: "10-04-89 ground floor Sudha hotel building, ground floor main road, beside SOUTH INDIA SHOPPING MALL, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026",
        timings: "Mon-Sun 7:00 AM - 9:00 PM",
        contact: "092402 22222"
      }
    ],
    Sheelanagar: [
      {
        id: '25',
        name: "SM MEDICAL CENTRE",
        rating: 5.0,
        address: "OPP; VAIDEHI VALLABHA DHARMA KATA, B Block Rd, Block E, AUTONAGAR, Visakhapatnam, Andhra Pradesh 530012",
        timings: "Mon-Sun open 24 hours",
        contact: "094902 62751"
      },
      {
        id: '26',
        name: "APOLLO 24/7 LAB TEST CENTRE",
        rating: 4.1,
        address: "D No. 32/8/4, Main Road, near K R N Nilayam, Sheela Nagar, Visakhapatnam, Andhra Pradesh 530012",
        timings: "Mon-Sun 6:00 AM - 11:00 PM",
        contact: "080 4885 1037",
        website: "https://apollo247.com"
      }
    ],
    Duvvada: [
      {
        id: '27',
        name: "AJANTA HEALTH CARE AND DIAGNOSTICS",
        rating: 4.8,
        address: "Main Road, Near Bus Stand, Duvvada, Visakhapatnam, Andhra Pradesh 530046",
        timings: "Mon-Sun 7:00 AM - 8:00 PM",
        contact: "091234 56789"
      },
      {
        id: '28',
        name: "CLARUS DIAGNOSTIC CENTRE",
        rating: 4.1,
        address: "Railway Station Road, Duvvada, Visakhapatnam, Andhra Pradesh 530046",
        timings: "Mon-Sun 8:00 AM - 9:00 PM",
        contact: "091876 54321",
        website: "https://clarusdiagnostics.com"
      }
    ]
  },
  PHARMACY: {
    Sriharipuram: [
      {
        id: '29',
        name: "DURGA MEDICAL AGENCIES",
        rating: 5.0,
        address: "Door No. 65-1-182, High School Rd, Near Coromandal Gate, Malkapuram Post, Sri Harikota, Sriharipuram, Visakhapatnam, Andhra Pradesh 530011",
        timings: "Mon-Sun 9:00 AM - 10:00 PM",
        contact: "089777 88999"
      },
      {
        id: '30',
        name: "APOLLO PHARMACY",
        rating: 3.4,
        address: "Ground Floor, 62/1/14/A, Main Road, Sriharipuram, Visakhapatnam, Andhra Pradesh 530011",
        timings: "Mon-Sun 7:00 AM - 11:00 PM",
        contact: "079953 89258",
        website: "https://apollopharmacy.com"
      },
      {
        id: '31',
        name: "MEDPLUS PHARMACY",
        rating: 3.9,
        address: "Commercial Complex, Sriharipuram, Visakhapatnam, Andhra Pradesh 530011",
        timings: "Mon-Sun 7:00 AM - 11:00 PM",
        contact: "089666 77888"
      }
    ],
    Gajuwaka: [
      {
        id: '32',
        name: "SRI SAI MADHURI MEDICALS",
        rating: 4.5,
        address: "8-13-14/7, Main Rd, Near Amaravathi Hotel, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026",
        timings: "Mon-Sun 7:00 AM - 10:00 PM",
        contact: "095736 11299"
      },
      {
        id: '33',
        name: "APOLLO PHARMACY",
        rating: 4.3,
        address: "8-13-14/10, Main Rd, Near Amaravathi Hotel, Opposite 38 Bus Stop, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026",
        timings: "Mon-Sun 7:00 AM - 11:00 PM",
        contact: "079953 89258",
        website: "https://apollopharmacy.com"
      },
      {
        id: '34',
        name: "LALITHA MEDICALS & GENERAL STORES",
        rating: 4.4,
        address: "D. No. 7-16-37, Service Rd, NH- 5 Road, Old Gajuwaka Junction, Old Gajuwaka, Chaitanya Nagar, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026",
        timings: "Mon-Sun 9:00 AM - 10:00 PM",
        contact: "0891 646 8778"
      }
    ],
    Sheelanagar: [
      {
        id: '35',
        name: "APOLLO PHARMACY",
        rating: 4.1,
        address: "8/4, 32, NH 516C, near Vikas College, Sheela Nagar, Visakhapatnam, Andhra Pradesh 530012",
        timings: "Mon-Sun 7:00 AM - 11:00 PM",
        contact: "076808 81593",
        website: "https://apollopharmacy.com"
      },
      {
        id: '36',
        name: "RENUKA MEDICAL AND GENERAL STORE",
        rating: 4.0,
        address: "Venkateswara Colony Rd, Near SBI Bank, Venketeshwara Colony, Sheela Nagar, Visakhapatnam, Andhra Pradesh 530012",
        timings: "Mon-Sun 9:30 AM - 9:00 PM",
        contact: "094918 01779"
      }
    ],
    Duvvada: [
      {
        id: '37',
        name: "APOLLO PHARMACY",
        rating: 4.2,
        address: "PMR Shopping Complex, No. 2/5/9, Main Road, opp. Andhra Bank, Prasanthinagar, Aganampudi, Visakhapatnam, Andhra Pradesh 530046",
        timings: "Mon-Sun 7:00 AM - 11:00 PM",
        contact: "076808 81593",
        website: "https://apollopharmacy.com"
      },
      {
        id: '38',
        name: "ADITHYA PHARMACY",
        rating: 4.5,
        address: "Medical Center, Duvvada, Visakhapatnam, Andhra Pradesh 530026",
        timings: "Mon-Sun 7:00 AM - 10:30 PM",
        contact: "080 4885 1037"
      }
    ]
  }
};

// Schemes Data
const schemesData = [
  {
    id: 1,
    title: 'AYUSHMAN BHARAT - PRADHAN MANTRI JAN AROGYA YOJANA',
    description: 'AB-PMJAY aims to provide a health cover of ₹5,00,000 per family per year',
    color: 'scheme-card-blue',
    fullDetails: {
      overview: 'Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) is the world\'s largest health insurance scheme aimed at providing a health cover of ₹5 lakh per family per year for secondary and tertiary care hospitalization to over 10.74 crore poor and vulnerable families.',
      objectives: [
        'Provide financial protection against catastrophic health expenditure',
        'Improve access to quality healthcare services',
        'Reduce out-of-pocket expenditure on medical treatment',
        'Enhance productivity and efficiency of healthcare delivery systems'
      ],
      eligibility: [
        'Families identified through Socio-Economic Caste Census (SECC) 2011',
        'Rural families: Households without shelter, destitute, manual scavenger families, primitive tribal groups, legally released bonded labour',
        'Urban families: Rag pickers, beggars, domestic workers, street vendors, construction workers, security guards, etc.',
        'Automatic inclusion for families covered under RSBY'
      ],
      benefits: [
        'Cashless treatment up to ₹5 lakh per family per year',
        'Coverage for pre and post-hospitalization expenses',
        'No restriction on family size, age, or gender',
        'Coverage for pre-existing conditions from day one',
        'Covers 1,393 medical packages including surgery, medical and day care treatments',
        'Free treatment at both public and private empanelled hospitals'
      ],
      coverage: '₹5,00,000 per family per year for secondary and tertiary care hospitalization',
      applicationProcess: [
        'Check eligibility on the official AB-PMJAY website',
        'Visit nearest Common Service Centre (CSC) or empanelled hospital',
        'Provide Aadhaar card and other required documents',
        'Get Ayushman Card generated instantly',
        'Use the card for cashless treatment at empanelled hospitals'
      ],
      requiredDocuments: [
        'Aadhaar Card',
        'Ration Card',
        'Mobile Number',
        'SECC family ID (if available)',
        'Any government-issued photo ID proof'
      ],
      contactInfo: {
        website: 'https://pmjay.gov.in',
        helpline: '14555',
        email: 'info@pmjay.gov.in'
      },
      keyFeatures: [
        'Paperless and cashless transactions',
        'Portable across the country',
        'Quality assurance and standardization of treatment',
        'Real-time monitoring and evaluation',
        'Fraud prevention and control mechanisms'
      ]
    }
  },
  {
    id: 2,
    title: 'DR. NTR VAIDYA SEVA SCHEME',
    description: 'This aims to provide free quality hospital care and equity of access to BPL families by purchase of quality medical services through a self-funded reimbursement mechanism',
    color: 'scheme-card-blue',
    fullDetails: {
      overview: 'Dr. NTR Vaidya Seva is a health insurance scheme launched by the Government of Andhra Pradesh to provide free quality hospital care to Below Poverty Line (BPL) families through a cashless treatment mechanism.',
      objectives: [
        'Provide free quality healthcare to BPL families',
        'Ensure equity of access to medical services',
        'Reduce financial burden on poor families',
        'Improve health outcomes in rural and urban areas'
      ],
      eligibility: [
        'Below Poverty Line (BPL) families in Andhra Pradesh',
        'White card holders',
        'Families with annual income below ₹1,00,000',
        'Antyodaya Anna Yojana (AAY) cardholders'
      ],
      benefits: [
        'Cashless treatment up to ₹2,00,000 per family per year',
        'Coverage for 1,059 medical procedures',
        'Free medicines and diagnostics',
        'Transportation allowance for patients',
        'Coverage for pre-existing conditions',
        'No age limit for beneficiaries'
      ],
      coverage: '₹2,00,000 per family per year for various medical treatments and procedures',
      applicationProcess: [
        'Visit nearest Aarogyasri Health Care Trust office',
        'Submit application with required documents',
        'Get health card issued after verification',
        'Visit empanelled hospitals for treatment',
        'Show health card for cashless treatment'
      ],
      requiredDocuments: [
        'BPL Card/White Card',
        'Aadhaar Card',
        'Income Certificate',
        'Residence Certificate',
        'Passport size photographs',
        'Bank account details'
      ],
      contactInfo: {
        website: 'https://aarogyasri.ap.gov.in',
        helpline: '104',
        email: 'info@aarogyasri.ap.gov.in'
      },
      keyFeatures: [
        'Cashless treatment at empanelled hospitals',
        'Wide network of healthcare providers',
        'Quality assurance mechanisms',
        'Grievance redressal system',
        'Regular monitoring and evaluation'
      ]
    }
  },
  {
    id: 3,
    title: 'ESI SCHEME',
    description: 'It is a social security program in India that provides financial and medical benefits to employees in case of sickness, maternity, disablement, and death due to employment injury.',
    color: 'scheme-card-blue',
    fullDetails: {
      overview: 'The Employees\' State Insurance (ESI) Scheme is a comprehensive social security scheme that provides medical care and cash benefits to employees and their dependents. It is administered by the Employees\' State Insurance Corporation (ESIC).',
      objectives: [
        'Provide comprehensive medical care to employees and their families',
        'Offer cash benefits during sickness and employment injury',
        'Ensure social security for the working class',
        'Promote preventive healthcare measures'
      ],
      eligibility: [
        'Employees earning up to ₹25,000 per month',
        'Working in factories or establishments with 10 or more employees',
        'Employees in shops, hotels, restaurants, cinemas, road transport undertakings with 20 or more employees',
        'Dependents include spouse, children up to 25 years, and dependent parents'
      ],
      benefits: [
        'Free medical treatment for self and family',
        'Sickness benefit (70% of average daily wages)',
        'Maternity benefit (100% of average daily wages for 26 weeks)',
        'Disablement benefit for temporary/permanent disability',
        'Dependent benefit in case of death due to employment injury',
        'Funeral expenses reimbursement'
      ],
      coverage: 'Comprehensive medical care and cash benefits for employees and their dependents',
      applicationProcess: [
        'Employer registers the establishment with ESIC',
        'Employee gets registered and receives ESI card',
        'Choose a dispensary/hospital for treatment',
        'Show ESI card for cashless medical treatment',
        'Apply for cash benefits through employer or online'
      ],
      requiredDocuments: [
        'ESI Card/E-Pehchan Card',
        'Aadhaar Card',
        'Medical certificates (for cash benefits)',
        'Employment proof',
        'Bank account details',
        'Passport size photographs'
      ],
      contactInfo: {
        website: 'https://www.esic.in',
        helpline: '1800-11-2526',
        email: 'director@esic.nic.in'
      },
      keyFeatures: [
        'Cashless medical treatment',
        'Wide network of hospitals and dispensaries',
        'Online services for beneficiaries',
        'Preventive healthcare programs',
        'Rehabilitation services for disabled'
      ]
    }
  },
  {
    id: 4,
    title: 'JANANI SURAKSHA YOJANA JSY',
    description: 'Is a centrally sponsored scheme, which integrates cash assistance with delivery and post-delivery care.',
    color: 'scheme-card-blue',
    fullDetails: {
      overview: 'Janani Suraksha Yojana (JSY) is a safe motherhood intervention under the National Rural Health Mission (NHM) that promotes institutional delivery among poor pregnant women by providing cash assistance.',
      objectives: [
        'Reduce maternal and neonatal mortality',
        'Promote institutional delivery among poor women',
        'Integrate cash assistance with antenatal care',
        'Improve access to skilled birth attendance'
      ],
      eligibility: [
        'Pregnant women belonging to BPL families',
        'All pregnant women in Low Performing States (LPS)',
        'Pregnant women above 19 years of age',
        'Maximum of two live births for cash assistance'
      ],
      benefits: [
        'Cash assistance for institutional delivery: ₹1,400 (rural) / ₹1,000 (urban) in LPS',
        'Cash assistance: ₹700 (rural) / ₹600 (urban) in High Performing States',
        'ASHA incentive: ₹600 per delivery in LPS',
        'Free delivery care including C-section',
        'Free drugs and consumables',
        'Free diagnostics'
      ],
      coverage: 'Cash assistance and free delivery care for pregnant women from BPL families',
      applicationProcess: [
        'Register pregnancy at nearest ANM/ASHA/AWW',
        'Complete antenatal check-ups',
        'Deliver at government hospital or accredited private facility',
        'Receive cash assistance within 7 days of delivery',
        'Complete post-natal care as advised'
      ],
      requiredDocuments: [
        'BPL Card',
        'Aadhaar Card',
        'JSY Card/MCP Card',
        'Age proof',
        'Bank account details',
        'Residence proof'
      ],
      contactInfo: {
        website: 'https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=841&lid=309',
        helpline: '104/108',
        email: 'mission@nhm.gov.in'
      },
      keyFeatures: [
        'Cash incentive for institutional delivery',
        'Integration with ASHA program',
        'Focus on high-risk pregnancies',
        'Referral transport facility',
        'Post-delivery follow-up care'
      ]
    }
  },
  {
    id: 5,
    title: 'RASHTRIYA SWASTHYA BIMA YOJANA (RSBY)',
    description: 'The objective of RSBY is to provide protection to unorganized sector workers and his family members from financial liabilities arising out of health shocks that involve hospitalization.',
    color: 'scheme-card-blue',
    fullDetails: {
      overview: 'Rashtriya Swasthya Bima Yojana (RSBY) was a health insurance scheme for Below Poverty Line (BPL) families to provide protection against financial liabilities arising out of health shocks that involve hospitalization. It has now been merged with Ayushman Bharat PM-JAY.',
      objectives: [
        'Provide health insurance coverage to BPL families',
        'Reduce out-of-pocket expenditure on healthcare',
        'Improve access to quality healthcare services',
        'Protect families from financial hardship due to hospitalization'
      ],
      eligibility: [
        'Below Poverty Line (BPL) families',
        'Unorganized sector workers',
        'Families identified through SECC 2011',
        'Maximum of 5 members per family covered'
      ],
      benefits: [
        'Cashless treatment up to ₹30,000 per family per year',
        'Coverage for hospitalization expenses',
        'Pre-existing conditions covered from day one',
        'Maternity benefits up to ₹2,500',
        'Transportation allowance',
        'No age restriction for family members'
      ],
      coverage: '₹30,000 per family per year for hospitalization expenses (now upgraded under PM-JAY)',
      applicationProcess: [
        'Automatic enrollment for eligible BPL families',
        'Biometric smart card issued after enrollment',
        'Visit empanelled hospitals for treatment',
        'Show smart card for cashless treatment',
        'No premium payment required from beneficiaries'
      ],
      requiredDocuments: [
        'BPL Card',
        'Aadhaar Card',
        'Voter ID Card',
        'Ration Card',
        'Passport size photographs',
        'Family details'
      ],
      contactInfo: {
        website: 'https://pmjay.gov.in (merged with PM-JAY)',
        helpline: '14555',
        email: 'info@pmjay.gov.in'
      },
      keyFeatures: [
        'Biometric smart card technology',
        'Cashless hospitalization',
        'Portability across India',
        'Quality healthcare delivery',
        'Now integrated with Ayushman Bharat PM-JAY'
      ]
    }
  },
  {
    id: 6,
    title: 'EHS SCHEME',
    description: 'Employees Health Scheme is formulated to provide cashless treatment to the employees, pensioners of the State Government and their dependent family members.',
    color: 'scheme-card-blue',
    fullDetails: {
      overview: 'The Employees Health Scheme (EHS) is designed to provide comprehensive healthcare benefits to state government employees, pensioners, and their dependent family members through a cashless treatment mechanism.',
      objectives: [
        'Provide quality healthcare to government employees and pensioners',
        'Ensure cashless treatment facility',
        'Reduce financial burden on employees for medical expenses',
        'Improve health outcomes among government workforce'
      ],
      eligibility: [
        'State government employees (serving and retired)',
        'Pensioners of state government',
        'Dependent family members (spouse, children, parents)',
        'Contract employees (in some states)',
        'Teachers and other educational staff'
      ],
      benefits: [
        'Cashless treatment at empanelled hospitals',
        'Coverage for OPD and IPD treatments',
        'Specialist consultations',
        'Diagnostic tests and procedures',
        'Emergency medical care',
        'Maternity and child care benefits',
        'Coverage for pre-existing conditions'
      ],
      coverage: 'Comprehensive healthcare coverage including OPD, IPD, diagnostics, and emergency care',
      applicationProcess: [
        'Apply through employer/pension disbursing authority',
        'Submit application with required documents',
        'Get EHS card issued after verification',
        'Register with empanelled healthcare providers',
        'Use card for cashless treatment'
      ],
      requiredDocuments: [
        'Employee ID Card/Pension Book',
        'Service Certificate',
        'Aadhaar Card',
        'Family details and photographs',
        'Medical fitness certificate',
        'Bank account details'
      ],
      contactInfo: {
        website: 'Varies by state government',
        helpline: 'State-specific helpline numbers',
        email: 'Contact respective state health department'
      },
      keyFeatures: [
        'Cashless treatment facility',
        'Wide network of empanelled hospitals',
        'Coverage for family members',
        'No premium payment required',
        'Quality assured healthcare services',
        'Grievance redressal mechanism'
      ]
    }
  }
];

// ChatBot FAQ Data
const chatBotFAQs = {
  hospital: [
    {
      question: "What are the hospital's outpatient (OPD) timings?",
      answer: "Most hospitals have OPD timings from 9:00 AM to 5:00 PM on weekdays and 9:00 AM to 1:00 PM on Saturdays. Emergency services are available 24/7. However, timings may vary by department and hospital, so it's best to call ahead or check the specific hospital's schedule."
    },
    {
      question: "How do I book a consultation with a specialist?",
      answer: "You can book specialist consultations through: 1) Online appointment systems on hospital websites, 2) Calling the hospital's appointment desk, 3) Visiting the hospital reception in person, 4) Using mobile apps provided by the hospital. Some specialists may require a referral from a general physician."
    },
    {
      question: "Are emergency services available 24/7?",
      answer: "Yes, most major hospitals provide 24/7 emergency services. Emergency departments are equipped to handle critical cases, accidents, and urgent medical situations at any time. However, it's advisable to call ahead for non-critical emergencies to ensure availability of specific services."
    },
    {
      question: "What are the consultation charges for different departments?",
      answer: "Consultation charges vary by hospital and department. General physician consultations typically range from ₹200-₹500, while specialist consultations can range from ₹500-₹1500. Government hospitals usually have lower charges. Many hospitals accept insurance and offer cashless treatment options."
    },
    {
      question: "How can I check doctor availability?",
      answer: "You can check doctor availability by: 1) Calling the hospital's inquiry desk, 2) Visiting the hospital website's doctor schedule section, 3) Using the hospital's mobile app, 4) Asking at the reception desk. Many hospitals also display doctor schedules at the OPD counters."
    },
    {
      question: "Is prior appointment mandatory for diagnostics or lab tests?",
      answer: "For most routine lab tests, appointments are not mandatory, but they're recommended to avoid waiting times. For specialized tests like MRI, CT scans, or ultrasounds, prior appointments are usually required. Some tests may require fasting or special preparation."
    },
    {
      question: "Are there any financial support programs for chronic illness treatment?",
      answer: "Yes, several programs are available: 1) Ayushman Bharat scheme for eligible families, 2) State government health schemes, 3) Hospital-specific charity programs, 4) NGO support programs, 5) Corporate CSR health initiatives. Contact the hospital's social worker or patient care coordinator for assistance."
    }
  ],
  tests: [
    {
      question: "What are the most common health checkup tests I should take?",
      answer: "Essential health checkup tests include: 1) Complete Blood Count (CBC), 2) Blood sugar levels (fasting and post-meal), 3) Lipid profile (cholesterol), 4) Liver function tests, 5) Kidney function tests, 6) Thyroid function tests, 7) Vitamin D and B12 levels, 8) Blood pressure monitoring. The frequency depends on your age and health conditions."
    },
    {
      question: "What is a CBC test and why is it important?",
      answer: "Complete Blood Count (CBC) is a blood test that evaluates your overall health and detects various disorders. It measures red blood cells, white blood cells, hemoglobin, hematocrit, and platelets. CBC can help diagnose anemia, infections, blood cancers, immune system disorders, and monitor treatment effectiveness."
    },
    {
      question: "What tests should I take if I feel tired all the time?",
      answer: "For persistent fatigue, consider these tests: 1) CBC to check for anemia, 2) Thyroid function tests (TSH, T3, T4), 3) Blood sugar levels for diabetes, 4) Vitamin D and B12 levels, 5) Iron studies, 6) Liver and kidney function tests, 7) Sleep study if sleep disorders are suspected. Consult a doctor for proper evaluation."
    },
    {
      question: "How do I know if I have a vitamin deficiency?",
      answer: "Common signs of vitamin deficiencies include fatigue, weakness, frequent infections, slow wound healing, bone pain, hair loss, and mood changes. Blood tests can measure levels of Vitamin D, B12, B6, folate, and other vitamins. A comprehensive metabolic panel can help identify specific deficiencies."
    },
    {
      question: "What health checkups should I take every 3 months?",
      answer: "For diabetics: Blood sugar (HbA1c), blood pressure monitoring. For heart patients: Lipid profile, blood pressure. For thyroid patients: TSH levels. For those on medications: Liver and kidney function tests. Generally healthy individuals may not need quarterly tests unless advised by a doctor."
    },
    {
      question: "What health checkups should I take every 6 months?",
      answer: "Recommended 6-monthly tests include: 1) Blood pressure and weight monitoring, 2) Blood sugar levels (if pre-diabetic), 3) Dental checkup, 4) Eye examination, 5) Skin cancer screening, 6) For women: Breast self-examination, 7) For men over 50: Prostate screening. Adjust frequency based on family history and risk factors."
    },
    {
      question: "Can I get these tests done at a government hospital?",
      answer: "Yes, government hospitals offer most routine tests at subsidized rates. They provide CBC, blood sugar, lipid profile, liver/kidney function tests, and basic imaging. Some specialized tests might have longer waiting times. Bring necessary documents like Aadhaar card, and check if you're eligible for free testing under government schemes."
    }
  ],
  'government-schemes': [
    {
      question: "What government health schemes are available for senior citizens?",
      answer: "Senior citizens can benefit from: 1) Ayushman Bharat PM-JAY (₹5 lakh coverage), 2) Senior Citizen Health Insurance schemes by various states, 3) Rashtriya Swasthya Bima Yojana, 4) State-specific schemes like Delhi's Aam Aadmi Mohalla Clinics, 5) Free health checkups at government hospitals, 6) Subsidized medicines through Jan Aushadhi stores."
    },
    {
      question: "Am I eligible for Ayushman Bharat Yojana (PM-JAY)?",
      answer: "You're eligible if: 1) Your family is listed in SECC 2011 database, 2) You belong to specific rural/urban categories (landless laborers, beggars, domestic workers, etc.), 3) You have a valid ration card from eligible categories. Check eligibility on pmjay.gov.in or visit nearest Common Service Center with your Aadhaar card."
    },
    {
      question: "How can I apply for free or subsidized treatment under government schemes?",
      answer: "Steps to apply: 1) Check eligibility on scheme websites, 2) Visit nearest empanelled hospital or Common Service Center, 3) Carry required documents (Aadhaar, ration card, income certificate), 4) Get enrolled and receive health card, 5) Use the card for cashless treatment at empanelled hospitals. No premium payment required for most schemes."
    },
    {
      question: "What documents are needed to enroll in health benefit programs?",
      answer: "Required documents typically include: 1) Aadhaar Card (mandatory), 2) Ration Card or BPL Card, 3) Income Certificate, 4) Residence Proof, 5) Bank account details, 6) Passport size photographs, 7) Family details, 8) Caste certificate (if applicable). Keep both original and photocopies ready."
    },
    {
      question: "Where can I find information about maternal health schemes?",
      answer: "Maternal health information is available at: 1) Anganwadi Centers, 2) Primary Health Centers (PHCs), 3) District hospitals, 4) ASHA workers in your area, 5) Government health department websites, 6) National Health Mission portal, 7) Janani Suraksha Yojana centers. Contact your local ANM (Auxiliary Nurse Midwife) for guidance."
    },
    {
      question: "Are there any financial support programs for chronic illness treatment?",
      answer: "Yes, several programs provide support: 1) Ayushman Bharat for hospitalization up to ₹5 lakh, 2) State government schemes for specific diseases, 3) Rashtriya Arogya Nidhi for BPL patients, 4) Chief Minister's Relief Fund in various states, 5) NGO and charitable organization programs, 6) Hospital-based financial assistance programs. Contact hospital social workers for guidance."
    }
  ]
};

// Global state
let currentPage = 'home';
let currentChatBotView = 'categories';
let expandedFAQ = null;
let selectedScheme = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    showPage('home');
    populateSchemes();
    initializeChatBot();
}

// Page navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageId;
    }
    
    // Update navigation
    updateNavigation(pageId);
}

function updateNavigation(activePageId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.onclick && link.onclick.toString().includes(activePageId)) {
            link.classList.add('active');
        }
    });
}

// Search functionality
function performSearch() {
    const location = document.getElementById('location').value;
    const service = document.getElementById('service').value;
    
    if (!location || !service) {
        alert('Please select both location and service type');
        return;
    }
    
    displayResults(service, location);
    showPage('results');
}

function displayResults(serviceType, location) {
    const resultsTitle = document.getElementById('results-title');
    const resultsContent = document.getElementById('results-content');
    
    resultsTitle.textContent = `${serviceType}-${location}`;

    
    const data = getHealthcareData(serviceType, location);
    
    if (data.length === 0) {
        resultsContent.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <svg style="height: 4rem; width: 4rem; color: #9ca3af; margin: 0 auto 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 style="font-size: 1.125rem; font-weight: 500; color: #111827; margin-bottom: 0.5rem;">No results found</h3>
                <p style="color: #6b7280;">Try searching with a different location or service type.</p>
                <button class="btn-primary" style="margin-top: 1rem;" onclick="showPage('search')">New Search</button>
            </div>
        `;
        return;
    }
    
    resultsContent.innerHTML = data.map(item => createResultCard(item)).join('');
}

function createResultCard(item) {
    const ratingClass = getRatingClass(item.rating);
    const stars = createStarRating(item.rating);
    
    return `
        <div class="result-card">
            <div class="result-card-content">
                <div class="result-header">
                    <div class="result-info">
                        <h2 class="result-name">${item.name}</h2>
                        <div class="result-rating">
                            <div class="stars">${stars}</div>
                            <span class="rating-text">(${item.rating})</span>
                        </div>
                    </div>
                    <div class="rating-badge ${ratingClass}">${item.rating}</div>
                </div>
                
                <div class="result-details">
                    <div class="result-detail">
                        <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div class="detail-content">
                            <h3>Location</h3>
                            <p>${item.address}</p>
                        </div>
                    </div>
                    
                    ${item.timings ? `
                        <div class="result-detail">
                            <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12,6 12,12 16,14"></polyline>
                            </svg>
                            <div class="detail-content">
                                <h3>Timings</h3>
                                <p>${item.timings}</p>
                            </div>
                        </div>
                    ` : ''}
                    
                    ${item.contact ? `
                        <div class="result-detail">
                            <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <div class="detail-content">
                                <h3>Contact</h3>
                                <p>${item.contact}</p>
                            </div>
                        </div>
                    ` : ''}
                    
                    ${item.website ? `
                        <div class="result-detail">
                            <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                            <div class="detail-content">
                                <h3>Website</h3>
                                <a href="${item.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += `<svg class="star star-filled" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
            </svg>`;
        } else if (i === fullStars && hasHalfStar) {
            stars += `<svg class="star star-filled" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" style="opacity: 0.5;">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
            </svg>`;
        } else {
            stars += `<svg class="star star-empty" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
            </svg>`;
        }
    }
    
    return stars;
}

function getRatingClass(rating) {
    if (rating >= 4.0) return 'rating-excellent';
    if (rating >= 3.5) return 'rating-good';
    if (rating >= 3.0) return 'rating-average';
    if (rating >= 2.5) return 'rating-poor';
    return 'rating-bad';
}

function getHealthcareData(serviceType, location) {
    return healthcareData[serviceType]?.[location] || [];
}

// Schemes functionality
function populateSchemes() {
    const schemesGrid = document.getElementById('schemes-grid');
    schemesGrid.innerHTML = schemesData.map(scheme => `
        <div class="scheme-card ${scheme.color}" onclick="openSchemeModal(${scheme.id})">
            <h3 class="scheme-title">${scheme.title}</h3>
            <p class="scheme-description">${scheme.description}</p>
            <button class="scheme-btn">
                <span>Learn More</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </button>
        </div>
    `).join('');
}

function openSchemeModal(schemeId) {
    const scheme = schemesData.find(s => s.id === schemeId);
    if (!scheme) return;
    
    selectedScheme = scheme;
    
    document.getElementById('scheme-modal-title').textContent = scheme.title;
    document.getElementById('scheme-modal-description').textContent = scheme.description;
    
    const modalBody = document.getElementById('scheme-modal-body');
    modalBody.innerHTML = createSchemeModalContent(scheme);
    
    document.getElementById('scheme-modal').classList.add('active');
}

function closeSchemeModal() {
    document.getElementById('scheme-modal').classList.remove('active');
    selectedScheme = null;
}

function createSchemeModalContent(scheme) {
    const details = scheme.fullDetails;
    
    return `
        <div class="scheme-section">
            <h3 class="scheme-section-title">
                <svg class="scheme-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                </svg>
                Overview
            </h3>
            <div class="scheme-section-content">
                <p>${details.overview}</p>
            </div>
        </div>

        <div class="scheme-section">
            <h3 class="scheme-section-title">
                <svg class="scheme-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22,4 12,14.01 9,11.01"></polyline>
                </svg>
                Key Features
            </h3>
            <div class="scheme-grid">
                ${details.keyFeatures.map(feature => `
                    <div class="scheme-list-item">
                        <svg class="scheme-list-icon" style="color: #10b981;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22,4 12,14.01 9,11.01"></polyline>
                        </svg>
                        <span style="font-size: 0.875rem;">${feature}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="scheme-section">
            <h3 class="scheme-section-title">Objectives</h3>
            <div class="scheme-list">
                ${details.objectives.map(objective => `
                    <div class="scheme-list-item">
                        <div style="width: 0.5rem; height: 0.5rem; background: #4338ca; border-radius: 50%; margin-top: 0.5rem; flex-shrink: 0;"></div>
                        <span>${objective}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="scheme-section">
            <h3 class="scheme-section-title">
                <svg class="scheme-section-icon" style="color: #3b82f6;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16,8 20,8 23,11 23,16 16,16 16,8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                Coverage
            </h3>
            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 0.5rem; padding: 1rem;">
                <p style="color: #1e40af; font-weight: 500;">${details.coverage}</p>
            </div>
        </div>

        <div class="scheme-grid">
            <div class="scheme-section">
                <h3 class="scheme-section-title">
                    <svg class="scheme-section-icon" style="color: #10b981;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    Eligibility Criteria
                </h3>
                <div class="scheme-list">
                    ${details.eligibility.map(criteria => `
                        <div class="scheme-list-item">
                            <svg class="scheme-list-icon" style="color: #10b981;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22,4 12,14.01 9,11.01"></polyline>
                            </svg>
                            <span style="font-size: 0.875rem;">${criteria}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="scheme-section">
                <h3 class="scheme-section-title">Benefits</h3>
                <div class="scheme-list">
                    ${details.benefits.map(benefit => `
                        <div class="scheme-list-item">
                            <div style="width: 0.5rem; height: 0.5rem; background: #10b981; border-radius: 50%; margin-top: 0.5rem; flex-shrink: 0;"></div>
                            <span style="font-size: 0.875rem;">${benefit}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div class="scheme-section">
            <h3 class="scheme-section-title">Application Process</h3>
            <div class="scheme-steps">
                ${details.applicationProcess.map((step, index) => `
                    <div class="scheme-step">
                        <div class="scheme-step-number">${index + 1}</div>
                        <span>${step}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="scheme-section">
            <h3 class="scheme-section-title">Required Documents</h3>
            <div class="scheme-documents">
                ${details.requiredDocuments.map(document => `
                    <div class="scheme-document">
                        <svg class="scheme-document-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14,2 14,8 20,8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10,9 9,9 8,9"></polyline>
                        </svg>
                        <span style="font-size: 0.875rem;">${document}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="scheme-section">
            <h3 class="scheme-section-title">Contact Information</h3>
            <div class="scheme-contact">
                ${details.contactInfo.website ? `
                    <div class="scheme-contact-item">
                        <svg class="scheme-contact-icon" style="color: #3b82f6;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        <a href="${details.contactInfo.website}" target="_blank" rel="noopener noreferrer" class="scheme-contact-link">
                            <span>Official Website</span>
                            <svg style="height: 1rem; width: 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15,3 21,3 21,9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                ` : ''}
                ${details.contactInfo.helpline ? `
                    <div class="scheme-contact-item">
                        <svg class="scheme-contact-icon" style="color: #10b981;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span>Helpline: <strong>${details.contactInfo.helpline}</strong></span>
                    </div>
                ` : ''}
                ${details.contactInfo.email ? `
                    <div class="scheme-contact-item">
                        <svg class="scheme-contact-icon" style="color: #ef4444;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span>Email: <strong>${details.contactInfo.email}</strong></span>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// ChatBot functionality
currentChatBotView = 'categories';
expandedFAQ = null;
const hatBotFAQs = { // ⚠ only if declared with `var` elsewhere or as global

  "government-schemes": [
    { question: "What are Ayushman Bharat benefits?", answer: "Free health insurance for eligible citizens up to ₹5 lakhs." },
    { question: "How to check eligibility?", answer: "Visit the official PM-JAY website or your nearest health center." }
  ],
  "hospital": [
    { question: "How to book a hospital appointment?", answer: "Use the hospital's online portal or call their front desk." },
    { question: "Are walk-ins allowed?", answer: "Depends on hospital policy. Most accept emergencies without appointments." }
  ],
  "tests": [
    { question: "What is a CBC test?", answer: "Complete Blood Count test to assess general health." },
    { question: "Do I need to fast for blood tests?", answer: "Some tests like lipid profile require fasting. Ask your doctor." }
  ]
};

function initializeChatBot() {
  renderChatBotCategories();
}

function toggleChatBot() {
  const modal = document.getElementById('chatbot-modal');
  modal.classList.toggle('active');
  
  if (!modal.classList.contains('active')) {
    currentChatBotView = 'categories';
    expandedFAQ = null;
    renderChatBotCategories();
  }
}

function goBackToCategories() {
  currentChatBotView = 'categories';
  expandedFAQ = null;
  renderChatBotCategories();
}

function renderChatBotCategories() {
  const title = document.getElementById('chatbot-title');
  const backBtn = document.getElementById('chatbot-back');
  const body = document.getElementById('chatbot-body');

  title.textContent = 'HealthInfo Connect AI Assistant';
  backBtn.style.display = 'none';

  body.innerHTML = `
    <div class="chatbot-categories">
      <div class="chatbot-categories-header">
        <h3 class="chatbot-categories-title">Choose a category to get started:</h3>
      </div>
      <div class="chatbot-categories-list">
        <button class="category-btn" onclick="showChatBotFAQs('government-schemes')">
          <h4 class="category-title">Government Schemes</h4>
          <p class="category-description">Learn about health schemes and benefits</p>
        </button>
        <button class="category-btn" onclick="showChatBotFAQs('hospital')">
          <h4 class="category-title">Hospital</h4>
          <p class="category-description">Hospital services and appointments</p>
        </button>
        <button class="category-btn" onclick="showChatBotFAQs('tests')">
          <h4 class="category-title">Tests</h4>
          <p class="category-description">Health checkups and diagnostic tests</p>
        </button>
      </div>
    </div>
  `;
}

function showChatBotFAQs(category) {
  currentChatBotView = category;
  expandedFAQ = null;

  const title = document.getElementById('chatbot-title');
  const backBtn = document.getElementById('chatbot-back');
  const body = document.getElementById('chatbot-body');

  const categoryTitles = {
    'hospital': 'Hospital',
    'tests': 'Tests',
    'government-schemes': 'Government Schemes'
  };

  title.textContent = categoryTitles[category];
  backBtn.style.display = 'block';

  const faqs = chatBotFAQs[category] || [];

  body.innerHTML = `
    <div class="chatbot-faqs">
      <div class="chatbot-faqs-header">
        <p class="chatbot-faqs-description">Frequently asked questions about ${categoryTitles[category]}:</p>
      </div>
      <div class="faqs-list">
        ${faqs.map((faq, index) => `
          <div class="faq-item">
            <button class="faq-question" onclick="toggleFAQ('${category}', ${index})">
              <span class="faq-question-text">${faq.question}</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            <div class="faq-answer" id="faq-answer-${category}-${index}">
              <div class="faq-answer-content">${faq.answer}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function toggleFAQ(category, index) {
  const answerId = `faq-answer-${category}-${index}`;
  const answer = document.getElementById(answerId);
  const icon = answer.previousElementSibling.querySelector('.faq-icon');

  if (expandedFAQ === answerId) {
    // Collapse current
    answer.classList.remove('active');
    icon.style.transform = 'rotate(0deg)';
    expandedFAQ = null;
  } else {
    // Collapse previous
    if (expandedFAQ) {
      const prev = document.getElementById(expandedFAQ);
      const prevIcon = prev?.previousElementSibling?.querySelector('.faq-icon');
      if (prev) prev.classList.remove('active');
      if (prevIcon) prevIcon.style.transform = 'rotate(0deg)';
    }

    // Expand current
    answer.classList.add('active');
    icon.style.transform = 'rotate(180deg)';
    expandedFAQ = answerId;
  }
}

// Login functionality
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    console.log('Login attempt:', { email, password, remember });
    alert('Login functionality would be implemented here');
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
    
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = `
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
        `;
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = `
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        `;
    }
}

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    const chatbotModal = document.getElementById('chatbot-modal');
    const schemeModal = document.getElementById('scheme-modal');
    
    if (event.target === chatbotModal) {
        toggleChatBot();
    }
    
    if (event.target === schemeModal) {
        closeSchemeModal();
    }
});