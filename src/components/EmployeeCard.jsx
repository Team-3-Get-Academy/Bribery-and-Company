export default {
    render(ctx, props) {
        return <>
        <div class="employees" style="background: #353535; border-radius: 12px; padding: 16px;">
            <div style="display: flex">
              <img class="pfp" style="" src={props.img} />
              <div class="header">
                <h2 style="margin: 0;">${props.name}</h2>
                <h3 style="font-weight: 400; margin: 0;"><span style="font-weight: 600; color: #9c9cff;">${props.title}</span>, <span style="font-style: italic;">Bribery & Co.</span></h3>
              </div>
            </div>
            <p class="desc">${props.desc}</p>
        </div>
        </>
    }
}