import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import BuildImage from '../../components/BuildImage';

import Upload from "../../assets/fileupload.svg";

import styles from "../../styles/CreateBuildForm.module.css";
import imgStyles from "../../styles/BuildImage.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import inputStyles from "../../styles/SignUp.module.css";

function PostCreateForm() {

    const imageInput = useRef(null);
    const imageInput1 = useRef(null);
    const imageInput2 = useRef(null);
    const imageInput3 = useRef(null);
    const imageInput4 = useRef(null);
    const history = useHistory();
    const { id } = useParams();

    const [errors, setErrors] = useState({});
    const [statusText, setStatusText] = useState("UPDATE BUILD");

    const [buildData, setBuildData] = useState({
        build_name: "",
        content: "",
        main_image: "",
        gallery_image_1: "",
        gallery_image_2: "",
        gallery_image_3: "",
        gallery_image_4: "",
        build_cpu: "",
        build_mobo: "",
        build_ram: "",
        build_disk: "",
        build_gpu: "",
        build_case: "",
        build_monitor: "",
    });

    const {
        build_name,
        content,
        main_image,
        gallery_image_1,
        gallery_image_2,
        gallery_image_3,
        gallery_image_4,
        build_cpu,
        build_mobo,
        build_ram,
        build_disk,
        build_gpu,
        build_case,
        build_monitor
    } = buildData;

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/builds/${id}`);
                const {
                    build_name,
                    content,
                    main_image,
                    gallery_image_1,
                    gallery_image_2,
                    gallery_image_3,
                    gallery_image_4,
                    build_cpu,
                    build_mobo,
                    build_ram,
                    build_disk,
                    build_gpu,
                    build_case,
                    build_monitor,
                    is_owner
                } = data;

                is_owner ? setBuildData({
                    build_name,
                    content,
                    main_image,
                    gallery_image_1,
                    gallery_image_2,
                    gallery_image_3,
                    gallery_image_4,
                    build_cpu,
                    build_mobo,
                    build_ram,
                    build_disk,
                    build_gpu,
                    build_case,
                    build_monitor
                }) : history.push("/");
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [history, id]);

    const handleChange = (event) => {
        setBuildData({
            ...buildData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(main_image);
            setBuildData({
                ...buildData,
                main_image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("build_name", build_name);
        formData.append("content", content);
        formData.append("build_cpu", build_cpu);
        formData.append("build_mobo", build_mobo);
        formData.append("build_ram", build_ram);
        formData.append("build_disk", build_disk);
        formData.append("build_gpu", build_gpu);
        formData.append("build_case", build_case);
        formData.append("build_monitor", build_monitor);

        if (imageInput?.current?.files[0]) {
            formData.append("main_image", imageInput.current.files[0]);
        }

        if (imageInput1?.current?.files[0]) {
            formData.append("gallery_image_1", imageInput1.current.files[0]);
        }

        if (imageInput2?.current?.files[0]) {
            formData.append("gallery_image_2", imageInput2.current.files[0]);
        }

        if (imageInput3?.current?.files[0]) {
            formData.append("gallery_image_3", imageInput3.current.files[0]);
        }

        if (imageInput4?.current?.files[0]) {
            formData.append("gallery_image_4", imageInput4.current.files[0]);
        }

        try {
            setStatusText("UPDATING BUILD...");
            await axiosReq.put(`/builds/${id}`, formData);
            history.push(`/builds/${id}`);
        } catch (err) {
            console.log(err);
            console.log(formData);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };


    const textFields = (
        <div className="text-center">
            {/* Add your form fields here */}
            <Form.Group className="text-center">
                <Form.Label>BUILD NAME</Form.Label>
                <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_name" value={build_name} />
            </Form.Group>

            {errors?.build_name?.map((message, idx) => (
                <sub key={idx}>
                    {message}
                </sub>
            ))}

            <Form.Group className="text-center">
                <Form.Label>TELL US ABOUT THE BUILD - PROCESS, ISSUES ETC...</Form.Label>
                <Form.Control onChange={handleChange} className={inputStyles.Input} as="textarea" rows={8} name="content" value={content} />
            </Form.Group>

            {errors?.content?.map((message, idx) => (
                <sub key={idx}>
                    {message}
                </sub>
            ))}

            <Form.Group className="text-center">
                <Form.Label>CPU</Form.Label>
                <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_cpu" value={build_cpu} />
            </Form.Group>

            {errors?.build_cpu?.map((message, idx) => (
                <sub key={idx}>
                    {message}
                </sub>
            ))}

            <Form.Group className="text-center">
                <Form.Label>MOTHERBOARD</Form.Label>
                <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_mobo" value={build_mobo} />
            </Form.Group>

            {errors?.build_mobo?.map((message, idx) => (
                <sub key={idx}>
                    {message}
                </sub>
            ))}

            <Form.Group className="text-center">
                <Form.Label>RAM</Form.Label>
                <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_ram" value={build_ram} />
            </Form.Group>

            {errors?.build_ram?.map((message, idx) => (
                <sub key={idx}>
                    {message}
                </sub>
            ))}

            <Form.Group className="text-center">
                <Form.Label>STORAGE</Form.Label>
                <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_disk" value={build_disk} />
            </Form.Group>

            {errors?.build_disk?.map((message, idx) => (
                <sub key={idx}>
                    {message}
                </sub>
            ))}

            <Form.Group className="text-center">
                <Form.Label>GPU</Form.Label>
                <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_gpu" value={build_gpu} />
            </Form.Group>

            {errors?.build_gpu?.map((message, idx) => (
                <sub key={idx}>
                    {message}
                </sub>
            ))}

            <Form.Group className="text-center">
                <Form.Label>CASE</Form.Label>
                <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_case" value={build_case} />
            </Form.Group>

            {errors?.build_case?.map((message, idx) => (
                <sub key={idx}>
                    {message}
                </sub>
            ))}

            <Form.Group className="text-center">
                <Form.Label>MONITOR</Form.Label>
                <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_monitor" value={build_monitor} />
            </Form.Group>

            {errors?.build_monitor?.map((message, idx) => (
                <sub key={idx}>
                    {message}
                </sub>
            ))}

            <Button
                className={`${btnStyles.Button}`}
                onClick={() => history.goBack()}
            >
                CANCEL
            </Button>
            <Button className={`${btnStyles.Button}`} type="submit">
                {statusText}
            </Button>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>

                        <Form.Group className="text-center">
                            {main_image ? (
                                <>
                                    <figure>
                                        <Image className={imgStyles.ImgUpload} src={main_image} rounded />
                                    </figure>
                                    <div>
                                        <Form.Label
                                            className="d-none"
                                            htmlFor="image-upload"
                                        >
                                            SWAP IMAGE
                                        </Form.Label>
                                    </div>
                                </>
                            ) : (
                                <Form.Label
                                    className="d-flex justify-content-center"
                                    htmlFor="image-upload"
                                >
                                    <BuildImage className={styles.Svg} src={Upload} message="Click or tap to upload your main image" />
                                </Form.Label>
                            )}

                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeImage}
                                ref={imageInput}
                            />

                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                ref={imageInput1}
                            />
                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                ref={imageInput2}
                            />
                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                ref={imageInput3}
                            />
                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                ref={imageInput4}
                            />

                        </Form.Group>

                        {errors?.main_image?.map((message, idx) => (
                            <sub key={idx}>
                                {message}
                            </sub>
                        ))}

                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}

export default PostCreateForm;