import React from "react";

import Travel_Journal from "../Apps/Travel_Journal"

export default function Section_2() {
    let styles = {
        color: "blue"
    }

    return (
        <div className="section_2--container">
            <div>
                <Travel_Journal />
            </div>
            <div style={styles}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet enim at tortor lobortis vulputate. Curabitur rutrum sit amet tortor eu iaculis. Quisque massa neque, semper in aliquet eu, vestibulum vitae dolor. Ut egestas nisl ullamcorper erat auctor dictum. Proin non neque at sem consectetur sagittis non vitae risus. Vivamus convallis sem a felis malesuada, elementum dignissim risus pharetra. Donec sed porttitor enim. Fusce sodales metus eu luctus commodo. Vivamus nec viverra risus. Integer accumsan urna in massa lobortis vehicula. Nulla et dictum quam, at condimentum lorem. Donec eu accumsan nulla. Curabitur faucibus arcu rhoncus vehicula auctor. Fusce convallis aliquam arcu, nec egestas ipsum interdum sit amet. Proin malesuada lacinia mauris in tempus. Morbi pharetra aliquam velit a efficitur.
                </p>
            </div>
        </div>
    )
}