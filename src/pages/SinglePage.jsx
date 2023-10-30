import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
const SinglePage = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>Surya</span>
            <p>10/23/2021, 8:45 PM</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <AiFillEdit className="edit-delete" />
            </Link>
            <Link to={`/write?edit=2`}>
              <AiFillDelete className="edit-delete" />
            </Link>
          </div>
        </div>
        <h1>Title of the Post</h1>
        <p>
          Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Labore in cupiditate dolorem officia ratione
          assumenda esse illum numquam distinctio, laborum deleniti,
          necessitatibus sed natus inventore. Ducimus, optio laudantium. Eum
          dolorem necessitatibus recusandae deserunt facilis atque a quisquam,
          debitis ratione nesciunt eaque nihil reprehenderit fugiat saepe
          dolores voluptate at eveniet ipsam dolore, ipsa quod. Quis iste, ipsa
          harum ipsam architecto ea aperiam provident eius laudantium,
          aspernatur, dolorum velit unde in cupiditate sint vel magnam odit nisi
          officiis! Nulla fuga, reiciendis exercitationem soluta sit rerum
          incidunt delectus earum quasi officia quia rem beatae aliquid neque
          deleniti Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
          aliquid adipisci dignissimos fuga earum maxime deserunt magni porro,
          repellendus, laborum impedit vel soluta animi ut! Obcaecati tempora
          veniam quas sequi debitis libero corporis consequatur quos eveniet
          voluptates neque aspernatur, modi nihil! Et repellendus ex architecto
          iusto, eos debitis corrupti nam ratione quo hic, delectus commodi
          dicta dolores nobis deleniti quos a nesciunt magni eum necessitatibus
          saepe quod. Temporibus quasi esse omnis maiores tenetur aperiam culpa
          consectetur alias, sapiente reiciendis quidem inventore laborum neque
          accusantium veritatis accusamus odit maxime vitae pariatur? Reiciendis
          neque expedita quo dolor ducimus? Illum expedita aliquid, distinctio
          officiis et unde consectetur cupiditate inventore facere. Unde vitae
          aperiam error veniam cum facere quae possimus earum aspernatur dolorem
          culpa voluptas at eligendi natus sunt ullam, accusamus qui? Vel natus
          quaerat quos. Omnis numquam temporibus ratione corrupti ipsam saepe,
          facilis eos enim magni eaque pariatur, amet repellat adipisci. Fugit,
          sint ipsa! Modi dolorum nihil tenetur vero ea quis commodi et. Ipsam
          laboriosam totam qui, architecto, illum ab perspiciatis animi ducimus
          tenetur numquam veritatis quidem inventore voluptate recusandae
          temporibus asperiores aliquam quas! Temporibus, eveniet. Reiciendis,
          id ullam ratione eius quam accusantium adipisci excepturi iste vel
          eaque praesentium repellat dolorum temporibus pariatur nobis aliquid
          quis, numquam nisi ipsum quod ad dolor! Nobis sunt eius excepturi
          nemo. Qui suscipit, impedit quo non commodi voluptate culpa
          perferendis sunt ullam, adipisci ea modi at consequatur quibusdam
          corporis provident necessitatibus, iste deleniti architecto eaque
          sapiente recusandae dolorem! Possimus pariatur praesentium omnis vel
          eos nihil, nemo iure cum ab amet quidem illo nobis harum quia, sint
          magnam hic veritatis consequatur minus. Deserunt, perspiciatis.
          Corrupti quod reiciendis expedita, et libero quibusdam, mollitia
          cupiditate cum, necessitatibus modi exercitationem maiores? Unde
          placeat error perspiciatis possimus totam quas animi voluptatibus.
          Earum dignissimos explicabo sequi amet a nam doloribus rerum debitis
          adipisci. Facilis totam illo ducimus quas expedita? Corporis maiores
          fugiat quam porro placeat! Sapiente quae, iusto ipsam repellat
          expedita inventore, deleniti a provident harum explicabo, nam in est
          fuga culpa natus consequatur ut quam tempore doloribus exercitationem
          sint! Necessitatibus, ullam sit odit quos sapiente laboriosam, tenetur
          aperiam dolore nostrum, laudantium consequatur. Incidunt eos eius
          tempore excepturi ut libero est, facilis a animi nobis reiciendis rem
          ducimus aut quasi minima iure placeat modi nihil, doloremque ratione
          odit quibusdam ea laborum! Dignissimos aliquam aut incidunt recusandae
          ipsam labore maiores, natus distinctio aspernatur, obcaecati atque et,
          illo quo. Voluptatem tempora ipsum consequuntur assumenda ad nesciunt
          voluptate quia minus a laboriosam, ut distinctio quae fuga voluptatum
          animi veniam beatae nisi commodi voluptatibus nobis nostrum!
          Repudiandae laboriosam perferendis delectus nulla consequatur incidunt
          odio dolores error consectetur suscipit maxime, adipisci expedita quam
          optio voluptate exercitationem. Eius at, consequatur facere, itaque
          enim, sunt omnis consectetur delectus iste explicabo maiores quos eos
          veritatis placeat nulla ut. Dolor ex adipisci ipsum quam, reiciendis
          doloribus nam veritatis rem optio placeat natus rerum cum hic ullam,
          ratione, repellat perferendis eveniet officiis culpa. Ab officia quod
          ipsa nihil velit harum provident tempore sit, numquam dolor
          repudiandae labore dolores! Qui ipsa numquam quasi ab. eos ab labore
          nihil temporibus! Provident. amet consectetur adipisicing elit. Quidem
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default SinglePage;
