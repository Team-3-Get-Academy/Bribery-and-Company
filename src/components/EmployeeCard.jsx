export default {
    render(ctx, props) {
        return <>
        <div class="employees" style="background: #353535; border-radius: 12px; padding: 16px;">
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 6px;">
              <img class="pfp" style="" src={props.img} />
              <div class="header">
                <h2 style="margin: 0;">${props.name}</h2>
                <h3 style="font-weight: 400; margin: 0;"><span style="font-weight: 600; color: #9c9cff;">${props.title}</span>, <span style="font-style: italic;">Bribery & Co.</span></h3>
                <a style='margin: 0; cursor: pointer; font-size: 16px;' class='link' href={`mailto:${props.email}`} target="_blank">${props.email}</a>
              </div>
            </div>
            <p class="desc">${props.desc}</p>
        </div>
        </>
    }
}