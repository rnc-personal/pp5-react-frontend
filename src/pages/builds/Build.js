import React from 'react'
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import BuildPage from './BuildDetailPage';
import { Popout } from '../../components/Popout';


const Build = (props) => {
    const {
        id,
        creator,
        profile_id,
        profile_image,
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
        updated_at,
        comments_count,
        saves_count,
        save_id,
        setBuild,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === creator;

    const history = useHistory();

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

      const handleLike = async () => {
        try {
          const { data } = await axiosRes.post("/saved/", { build: id });
          setBuild((prevBuilds) => ({
            ...prevBuilds,
            results: prevBuilds.results.map((build) => {
              return build.id === id
                ? { ...build, saves_count: build.saves_count + 1, saved_id: data.id }
                : build;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
      };
    
      const handleUnlike = async () => {
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
        <Card className="bg-dark text-white">
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <img src={currentUser?.profile_image}  alt="user-avatar"/>
                        {creator}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {is_owner && BuildPage && <Popout handleEdit={handleEdit} handleDelete={handleDelete}/>}
                    </div>
                </Media>
            </Card.Body>

            <Link to={`/builds/${id}`}>
                <Card.Img src={main_image} alt={build_name} />
            </Link>

            <Card.Body>
                {build_name && <h2 className="text-center">{build_name}</h2>}
                {content && <h3>{content}</h3>}
                <span className="text-muted">{updated_at}</span>
                <div>
                    <ul> 
                    <li>CPU: {build_cpu}</li>
                    <li>GPU: {build_gpu}</li>
                    <li>MOBO: {build_mobo}</li>
                    <li>RAM: {build_ram}</li>
                    <li>Disk: {build_disk}</li>
                    <li>Case: {build_case}</li>
                    <li>Monitor: {build_monitor}</li>
                    </ul>
                </div>
                {is_owner ? (
                <p>You Already have this build saved</p>
          ) : save_id ? (
            <span onClick={handleUnlike}>
             UNSAVE THIS BUILD
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              SAVE THIS BUILD
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to save this Build!</Tooltip>}
            >
              saves
            </OverlayTrigger>
          )}
          <p className='text-sm'>
          {`${saves_count} SAVES`}
          </p>
          <Link to={`/builds/${id}`}>
            comments
          </Link>
          {comments_count}
            </Card.Body>
        </Card>
    )
}

export default Build