import React from 'react'
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import BuildPage from './BuildDetailPage';
import { Popout } from '../../components/Popout';

import styles from '../../styles/BuildDetail.module.css';
import { Player } from '@lottiefiles/react-lottie-player';
import BuildGallery from '../../components/BuildGallery';

const Build = (props) => {
  const {
    id,
    creator,
    profile_id,
    build_name,
    build_cpu,
    build_mobo,
    build_ram,
    build_disk,
    build_gpu,
    build_case,
    build_monitor,
    content,
    main_image,
    gallery_image_1,
    gallery_image_2,
    gallery_image_3,
    gallery_image_4,
    updated_at,
    comments_count,
    saves_count,
    save_id,
    setBuild
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === creator;

  const history = useHistory();

  //const galleryDebug = [img1, img2, img3, img4, img5, img6, img7, img8];
  const imagesGallery = [main_image, gallery_image_1, gallery_image_2, gallery_image_3, gallery_image_4];

  const handleEdit = () => {
    history.push(`/builds/${id}/edit`);
  };

  const handleDelete = async () => {
    alert("Are you sure you want to delete this build?");
    try {
      await axiosRes.delete(`/builds/${id}`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSave = async () => {
    try {
      const { data } = await axiosRes.post("/saved/", { build: id });
      setBuild((prevBuilds) => ({
        ...prevBuilds,
        results: prevBuilds.results.map((build) => {
          return build.id === id
            ? { ...build, saves_count: build.saves_count + 1, save_id: data.id }
            : build;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnsave = async () => {
    try {
      await axiosRes.delete(`/saved/${save_id}`);
      setBuild((prevBuilds) => ({
        ...prevBuilds,
        results: prevBuilds.results.map((build) => {
          return build.id === id
            ? { ...build, saves_count: build.saves_count - 1, save_id: null }
            : build;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className="bg-dark text-white my-5">
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            {creator}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && BuildPage && <Popout handleEdit={handleEdit} handleDelete={handleDelete} />}
          </div>
        </Media>
      </Card.Body>

      <BuildGallery id={id} allImages={imagesGallery} alt={build_name} />

      <Card.Body>
        {build_name && <h2 className="text-center">{build_name}</h2>}
        {content && <p>{content}</p>}
        <span className="text-muted">{updated_at}</span>
        <div className={styles.InfoContainer}>
            <h3 className={styles.InfoText}>SPECS</h3>
          <table className={styles.InfoTable}>
            <tbody>
            <tr className={styles.InfoGridRow}>
              <td className={styles.SpecText}>CPU:</td>
              <td>{build_cpu}</td>
            </tr>
            <tr className={styles.InfoGridRow}>
              <td className={styles.SpecText}>GPU:</td>
              <td>{build_gpu}</td>
            </tr>
            <tr className={styles.InfoGridRow}>
              <td className={styles.SpecText}>MOBO:</td>
              <td>{build_mobo}</td>
            </tr>
            <tr className={styles.InfoGridRow}>
              <td className={styles.SpecText}>RAM:</td>
              <td>{build_ram}</td>
            </tr>
            <tr className={styles.InfoGridRow}>
              <td className={styles.SpecText}>DISK:</td>
              <td>{build_disk}</td>
            </tr>
            <tr className={styles.InfoGridRow}>
              <td className={styles.SpecText}>CASE:</td>
              <td>{build_case}</td>
            </tr>
            <tr className={styles.InfoGridRow}>
              <td className={styles.SpecText}>MONITOR:</td>
              <td>{build_monitor}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <hr />

        <div className={styles.InfoWrapper}>
          {is_owner ? (
            <>
              <span>
                <Player
                  style={{ height: '60px', width: '60px' }}
                  src="https://lottie.host/5248049a-bfbc-4d28-8a5d-116ee59f38d9/Vhq6wYKNHT.json"
                  className='player'
                  autoplay
                  loop
                  direction="1"
                  speed={0.25}
                />
                <span className={styles.InfoText}>
                  YOUR BUILD
                </span>
              </span>
            </>
          ) : save_id ? (
            <span onClick={handleUnsave}>
              <Player
                style={{ height: '60px', width: '60px' }}
                src="https://lottie.host/438c676f-e32f-43de-b8d2-35d96a20bb27/3NxOp9eaJZ.json"
                className='player'
                loop
                autoplay
                direction="-1"
                speed={0.5}
              />
              <span className={`${styles.InfoText} ${styles.ActionLink}`}>
                UNSAVE THIS BUILD
              </span>
            </span>
          ) : currentUser ? (
            <span onClick={handleSave}>
              <Player
                style={{ height: '60px', width: '60px' }}
                src="https://lottie.host/c00eb3b8-7360-4d38-949e-d187b7fd681f/cn0JQNmpCD.json"
                className='player'
                loop
                autoplay
                speed={0.5}
              />
              <span className={`${styles.InfoText} ${styles.ActionLink}`}>
                SAVE THIS BUILD
              </span>
            </span>
          ) : (
            <span>
            <Link to={`/signin`}>
            <Player
            style={{ height: '60px', width: '60px' }}
            src="https://lottie.host/8c811ad6-b23d-4f05-95dd-0d1595afb074/yKMMfli1tg.json"
            className='player'
            loop
            autoplay
            speed={0.5}
            />
          </Link>
            <span className={`${styles.InfoText} ${styles.ActionLink}`}>
              LOGIN TO SAVE THIS BUILD
              </span>
          </span>
            
          )}

          <p className={styles.InfoText}>
            <Player
              style={{ height: '60px', width: '60px' }}
              src="https://lottie.host/bf6bfa0f-58ad-4338-a749-bf92aedad413/lVeLTIZ8fP.json"
              className='player'
              loop
              autoplay
              speed={0.5}
            />
            {`${saves_count} SAVES`}
          </p>

          <Link to={`/builds/${id}`}>
            <Player
              style={{ height: '60px', width: '60px' }}
              src="https://lottie.host/2828ad73-ac2d-4910-ab0c-9b5b998a231d/9iggnk7HKG.json"
              className='player'
              loop
              autoplay
              speed={1}
            />

            <span className={`${styles.InfoText} ${styles.ActionLink}`}>
              {comments_count + " COMMENTS"}
            </span>
          </Link>
        </div>

      </Card.Body>
    </Card>
  )
}

export default Build