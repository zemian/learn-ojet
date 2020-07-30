import {VComponent, customElement, h} from "ojs/ojvcomponent";

class Props {
    greetingName?: string
}

@customElement("my-hello-vcomponent")
export class MyHelloVComponent extends VComponent<Props> {

    greetingName = this.props["greetingName"];

    render(): VComponent.VNode {
        return (
            <div>
                Hello {this.greetingName}
            </div>
        );
    }
}
