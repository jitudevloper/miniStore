import React, { useState, useEffect, useMemo, useRef } from "react";
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import AuthService from "../../../api/services/AuthService";
import { alertErrorMessage, alertSuccessMessage } from "../../../customComponent/CustomAlertMessage";
import LoaderHelper from "../../../customComponent/loader/LoaderHelper";
import Select from 'react-select'
import countryList from 'react-select-country-list'

const Index = () => {
    // const options = useMemo(() => countryList().getData(), [])
    const [sportsList, setSportsList] = useState("")
    const [gradeList, setGradeList] = useState("")
    const [firstName, setFirstName] = useState("");
    const [countys, setCountys] = useState("")
    const [sports, setSports] = useState("");
    const [club, setClub] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [cCode, setCCode] = useState("")
    const [password, setPassword] = useState("")
    const [grade, setGrade] = useState("")
    const [clubCategory, setClubCategory] = useState("")
    const [countyList, setCountyList] = useState("")
    const [chairman, setChairman] = useState("")
    const [clubAdd, setClubAdd] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [clubTeam, setClubTeam] = useState("")
    const [gradeTeam,setGradeTeam]=useState("")
    const [country, setCountry] = useState("")
    const mobileNumberRef = useRef(null);
    const [error, setError] = useState({});
    const option = [];
    const grades = [];
    const clubsCategory = [];
    const county = []
    const gradeTeams = []


    const resetInputChange=()=>{
        setFirstName("");
        setCountys("");
        setSports("");
        setClub("");
        setEmail("");
        setMobile("");
        setCCode("");
        setPassword("");
        setGrade("");
        setChairman("");
        setClubAdd("");
        setCity("");
        setZipCode("");
        setClubTeam("");
        setGradeTeam("");
        setCountry("");

    }
    useEffect(() => {
        handleSportsList();
        handlegrade();
        handleClubCategoryList();
        handleCountiesList();
        handlegradeTeam();
    }, []);


    useEffect(() => {
        const validationErrors = validateForm();
        setError(validationErrors);
    }, [firstName, countys, sports, grade, club, email, mobile, password, cCode, clubTeam, zipCode, city, clubAdd, chairman,country]);


    useEffect(() => {
        const initPhoneInput = (inputRef) => {
            if (inputRef.current) {
                intlTelInput(inputRef.current, {
                    preferredCountries: ['in', 'co', 'us', 'de'],
                    separateDialCode: true,

                });
            }
        };

        initPhoneInput(mobileNumberRef);

    }, []);

    const handleInputChange = (event) => {

        const { name, value } = event.target;
        switch (event.target.name) {
            case "email":
                setEmail(event.target.value);
                break;
            case "firstName":
                setFirstName(event.target.value);
                break;
            case "countys":
                setCountys(event.target.value);
                break;
            case "sports":
                setSports(event.target.value);
                break;
            case "cCode":
                setCCode(event.target.value);
                break;
            case "club":
                setClub(event.target.value);
                break;
            case "mobile":
                setMobile(event.target.value);
                break;
            case "password":
                setPassword(event.target.value);
                break;

            case "grade":
                setGrade(event.target.value);
                break;

            case "chairman":
                setChairman(event.target.value);
                break;
            case "clubAdd":
                setClubAdd(event.target.value);
                break;
            case "city":
                setCity(event.target.value);
                break;
            case "zipCode":
                setZipCode(event.target.value);
                break;
            case "clubTeam":
                setClubTeam(event.target.value);
                break;
                case "country":
                    setCountry(event.target.value);
                    break;
        }
        setError(validateForm());
    }

   const options = useMemo(() => {
    const countryOptions = countryList().getData();
    return countryOptions.map((country) => ({
        value: country.value,
        label: ${country.label} ${country.flag},
    }));
}, []);

    const handleSportsList = async () => {
        LoaderHelper.loaderStatus(true);
        await AuthService.getSportsList().then(async (result) => {
            if (result.success === true) {
                try {
                    setSportsList(result?.data || []);
                    LoaderHelper.loaderStatus(false);
                } catch (error) {
                    alertErrorMessage(error);
                    LoaderHelper.loaderStatus(false);
                }
            } else {
                alertErrorMessage(result.message);
                LoaderHelper.loaderStatus(false);
            }
        });
    };

    const handlegrade = async () => {
        LoaderHelper.loaderStatus(true);
        await AuthService.getgradeLevelList().then(async (result) => {
            if (result?.success === true) {
                try {
                    setGradeList(result.data);
                    LoaderHelper.loaderStatus(false);
                } catch (error) {
                    alertErrorMessage(error);
                    LoaderHelper.loaderStatus(false);
                }
            } else {
                alertErrorMessage(result.message);
                LoaderHelper.loaderStatus(false);
            }
        });
    };


    const handleClubCategoryList = async () => {
        LoaderHelper.loaderStatus(true);
        await AuthService.getclubClubCategoryList().then(async result => {
            if (result?.success === true) {
                try {
                    setClubCategory(result?.data)
                    LoaderHelper.loaderStatus(false);
                } catch (error) {
                    LoaderHelper.loaderStatus(false);
                    alertErrorMessage(error);
                }
            } else {
                alertErrorMessage(result.message);
                LoaderHelper.loaderStatus(false);
            }
        });

    }

    const handleCountiesList = async () => {
        LoaderHelper.loaderStatus(true);
        await AuthService.getCountiesList().then(async (result) => {
            if (result?.success === true) {
                try {
                    setCountyList(result?.data);
                    LoaderHelper.loaderStatus(false);
                } catch (error) {
                    alertErrorMessage(error);
                    LoaderHelper.loaderStatus(false);
                }
            } else {
                alertErrorMessage(result.message);
                LoaderHelper.loaderStatus(false);
            }
        });
    };


    const handlegradeTeam = async () => {
        LoaderHelper.loaderStatus(true);
        await AuthService.getgradeList().then(async (result) => {
            if (result?.success === true) {
                try {
                    setGradeTeam(result.data);
                    LoaderHelper.loaderStatus(false);
                } catch (error) {
                    alertErrorMessage(error);
                    LoaderHelper.loaderStatus(false);
                }
            } else {
                alertErrorMessage(result.message);
                LoaderHelper.loaderStatus(false);
            }
        });
    };


    for (let i = 0; i < sportsList.length; i++) {
        option.push({ value: sportsList[i].sportCategory, label: sportsList[i].sportCategory });
    }

    for (let i = 0; i < gradeList.length; i++) {
        grades.push({ value: gradeList[i].levelGrade, label: gradeList[i].levelGrade });
    }

    for (let i = 0; i < clubCategory.length; i++) {
        clubsCategory.push({ value: clubCategory[i].clubCategory, label: clubCategory[i].clubCategory });
    }


    for (let i = 0; i < countyList.length; i++) {
        county.push({ value: countyList[i].countyCategory, label: countyList[i].countyCategory });
    }

    for (let i = 0; i < gradeTeam.length; i++) {
        gradeTeams.push({ value: gradeTeam[i].teamName, label: gradeTeam[i].teamName });
    }

    const handleAddManager = async (firstName, countys, sports, grade, club, email, mobile, password, cCode, clubTeam, zipCode, city, clubAdd, chairman,country) => {
        LoaderHelper.loaderStatus(true)
        await AuthService.getAddClub(firstName, countys, sports, grade, club, email, mobile, password, cCode, clubTeam, zipCode, city, clubAdd, chairman,country).then(async result => {
            if (result.success === true) {
                try {
                    resetInputChange();
                    alertSuccessMessage(result.message);
                    LoaderHelper.loaderStatus(false)

                } catch (error) {
                    alertErrorMessage(error);
                    console.log('error', ${error});
                    LoaderHelper.loaderStatus(false)
                }
            } else {
                const errorMessage = result.message;
                alertErrorMessage(errorMessage);
                LoaderHelper.loaderStatus(false)
            }
        });

    }



    const validateForm = () => {
        const newError = {};

        if (!firstName.trim()) {
            newError.firstName = 'club name is required';
        } else if (!/^[a-zA-Z ]+$/.test(firstName)) {
            newError.firstName = 'Only alphabets are allowed';
        }
        if (!countys.trim()) {
            newError.countys = 'county is required';
        }

        if (!email.trim()) {
            newError.email = 'email is required';
        } else if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
            newError.email = 'enter a valid email';
        }
        if (!mobile) {
            newError.mobile = 'mobileNumber number is required';
        }

        if (!sports) {
            newError.sports = 'sports is required';
        }
        if (!password) {
            newError.password = "Password is required";
        }
        if (!club) {
            newError.club = "club category is required";
        }
        if (!grade) {
            newError.grade = "grade is required";
        }

        if (!chairman) {
            newError.chairman = "Chairman is required";
        }
        if (!clubAdd) {
            newError.clubAdd = "Club Address is required";
        }
        if (!city) {
            newError.city = "City is required";
        }
        if (!zipCode) {
            newError.zipCode = "ZipCode is required";
        }
        if (!clubTeam) {
            newError.clubTeam = "ClubTeam is required";
        } if (!country) {
            newError.country = "country is required";
        }
        return newError;
    };


    return (
        <div id="layoutSidenav_content">
            <main>
                <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                    <div className="container-xl px-4">
                        <div className="page-header-content pt-4">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto mt-4">
                                    <h1 className="page-header-title">
                                        <div className="page-header-icon"><i data-feather="activity"></i></div>
                                        Add Club
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container-xl px-4 mt-n10">
                    <div class="card mb-4">
                        <div class="card-header">Enter Club Details</div>
                        <div class="card-body">
                            <form>
                                <div class="row gx-3 mb-3">
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputLastName">Club Name <em>*</em> </label>
                                        <input class="form-control form-control-solid" id="inputFirstName" type="text" onBlur={validateForm} name="firstName" value={firstName} placeholder="Enter your Club name" onChange={handleInputChange} />
                                        {error.firstName && <div className="error" style={{ color: "red", paddingRight: "50%", textAlign: "left" }}>{error.firstName}</div>}

                                    </div>


                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputLastName">County Category <em>*</em> </label>

                                        <Select
                                            options={county}
                                            placeholder="Select a County Category"
                                            name="countys"
                                            value={option.find(opt => opt.value === countys)}
                                            onChange={selectedOption => setCountys(selectedOption.value)}
                                            onBlur={validateForm}
                                        />
                                        {error.countys && <div className="error" style={{ color: "red", paddingRight: "50%", textAlign: "left" }}>{error.countys}</div>}
                                    </div>

                                </div>

                                <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                        <label class="small mb-1" for="inputBirthday">Email <em>*</em></label>
                                        <input class="form-control form-control-solid" id="inputSponsorCode" onBlur={validateForm} type="text" name="email" value={email} placeholder="Enter your email address" onChange={handleInputChange} />
                                        {error.email && <div className="error" style={{ color: "red", paddingRight: "50%", textAlign: "left" }}>{error.email}</div>}
                                    </div>



                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputLastName">Sports<em>*</em> </label>
                                        <Select
                                            options={option}
                                            placeholder="Select a sport"
                                            name="sports"
                                            value={option.find(opt => opt.value === sports)}
                                            onChange={selectedOption => setSports(selectedOption.value)}
                                            onBlur={validateForm}
                                        />
                                        {error.sports && <div className="error" style={{ color: "red", paddingRight: "50%", textAlign: "left" }}>{error.sports}</div>}
                                    </div>

                                </div>



                                <div class="row gx-3 mb-3">

                                    <div class="col-md-6">

                                        <label class="small mb-1" for="inputLocation" style={{ display: "block" }}>Mobile Number<em>*</em></label>
                                        <input class="form-control form-control-solid"
                                            onBlur={validateForm}
                                            ref={mobileNumberRef}
                                            type="text"
                                            name="phone"
                                            placeholder="Enter mobile number"
                                            onChange={(e) => {
                                                setMobile(e.target.value);
                                                const instance = window.intlTelInputGlobals.getInstance(mobileNumberRef.current);
                                                if (instance) {
                                                    const selectedCountryData = instance.getSelectedCountryData();
                                                    setCCode(selectedCountryData.dialCode);
                                                }
                                            }}
                                        />
                                        {error.mobile && <div className="error" style={{ color: "red", paddingRight: "50%", textAlign: "left" }}>{error.mobile}</div>}
                                    </div>
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputLocation">Club Category</label>
                                        <Select
                                            options={clubsCategory}
                                            placeholder="Select a Club Category"
                                            name="clubCategory"
                                            value={clubsCategory.find(opt => opt.value === club)}
                                            onChange={selectedOption => setClub(selectedOption.value)}
                                            onBlur={validateForm}
                                        />
                                        {error.club && <div className="error" style={{ color: "red", paddingRight: "50%", textAlign: "left" }}>{error.club}</div>}
                                    </div>

                                </div>



                                <div class="row gx-3 mb-3">

                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputLocation">Grade</label>
                                        <Select
                                            options={grades}
                                            placeholder="Select a grade"
                                            name="grade"
                                            value={grades.find(option => option.value === grade)}
                                            onChange={selectedOption => setGrade(selectedOption.value)}
                                            onBlur={validateForm}
                                        />
                                        {error.grade && <div className="error" style={{ color: "red", paddingRight: "50%", textAlign: "left" }}>{error.grade}</div>}
                                    </div>


                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputBirthday">ChairMan Name<em>*</em></label>
                                        <input class="form-control form-control-solid" id="inputSponsorCode" onBlur={validateForm} type="text" name="chairman" value={chairman} placeholder="Enter ChairMan Name" onChange={handleInputChange} />
                                        {error.chairman && <div className="error" style={{ color: "red", paddingRight: "50%", textAlign: "left" }}>{error.chairman}</div>}
                                    </div>



                                </div>

                                <div class="row gx-3 mb-3">

                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputBirthday">Club Address<em>*</em></label>
                                        <input class="form-control form-control-solid" id="inputSponsorCode" onBlur={validateForm} type="text" name="clubAdd" value={clubAdd} placeholder="Enter Club address" onChange={handleInputChange} />
                                        {error.clubAdd && <div className="error" style={{ color: "red", paddingRight: "50%", textAlign: "left" }}>{error.clubAdd}</div>}
                                    </div>


                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputBirthday">City<em>*</em></label>
                                        <input class="form-control form-control-solid" id="inputSponsorCode" onBlur={validateForm} type="text" name="city" value={city} placeholder="Enter your City" onChange={handleInputChange} />
                                        {error.city && <div className="error" style={{ color: "red", paddingRight: "50%", textAlign: "left" }}>{error.city}</div>}
                                    </div>



                                </div>

                                <div class="row gx-3 mb-3">

                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputBirthday">Zip Code<em>*</em></label>
                                        <input class="form-control form-control-solid" id="inputSponsorCode" onBlur={validateForm} type="text" name="zipCode" value={zipCode} placeholder="Enter ZipCode" onChange={handleInputChange} />
                                        {error.zipCode && <div className="error" style={{ color: "red", paddingRight: "50%", textAlign: "left" }}>{error.zipCode}</div>}
                                    </div>


                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputBirthday">Club Team<em>*</em></label>
                                        <Select
                                            options={gradeTeams}
                                            placeholder="Select a Club Team"
                                            name="gradeTeam"
                                            value={gradeTeams.find(opt => opt.value === clubTeam)}
                                            onChange={selectedOption => setClubTeam(selectedOption.value)}
                                            onBlur={validateForm}
                                        />                                     
                                    {error.clubTeam && <div className="error" style={{ color: "red", paddingRight: "50%", textAlign: "left" }}>{error.clubTeam}</div>}
                                    </div>



                                </div>



                                <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                        <label class="small mb-1" for="inputLastName">Country<em>*</em> </label>
                                        <Select options={options} getOptionLabel={option => option.label} onBlur={validateForm} value={options.find(opt => opt.value === country)} name="country" onChange={selectedOption => setCountry(selectedOption.label)} />
                                        {error.country && <div className="error" style={{ color: "red", paddingRight: "50%", textAlign: "left" }}>{error.country}</div>}
                                    </div>
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputLocation">Password</label>
                                        <input class="form-control form-control-solid" id="inputLocation" onBlur={validateForm} type="text" name="password" value={password} placeholder="Enter your password" onChange={handleInputChange} />
                                        {error.password && <div className="error" style={{ color: "red", paddingRight: "50%", textAlign: "left" }}>{error.password}</div>}
                                    </div>
                                </div>
                                <button class="btn-sm btncolor rounded-pill" type="button" disabled={!firstName || !countys || !grade || !email || !mobile || !password || !club || !sports ||!clubTeam ||!zipCode ||!city ||!clubAdd ||!chairman||!country} onClick={() => handleAddManager(firstName, countys, sports, grade, club, email, mobile, password, cCode, clubTeam, zipCode, city, clubAdd, chairman,country)}> Submit Details </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Index;