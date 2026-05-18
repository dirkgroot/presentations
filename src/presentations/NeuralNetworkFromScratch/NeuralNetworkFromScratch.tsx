import {Deck} from "../../components/Deck.tsx";
import {AvisiLogoSlide} from "../../slides/AvisiLogoSlide.tsx";
import {PresentationProps} from "../PresentationProps.tsx";
import {Backgrounds} from "../../components/Backgrounds.tsx";
import styles from "../Presentation.module.scss";
import {Emphasis} from "../../components/Emphasis.tsx";
import {WhoAmISlide} from "../../slides/WhoAmISlide.tsx";
import comparator_graph from "./comparator-graph.svg";
import handwritten_digits from "./handwritten-digits.png";
import nand_gate from "./nand_gate_light_v3.svg";
import neural_network from "./neural-network.png";
import neuron from "./neuron.png";
import perceptron from "./perceptron.png";
import leaky_relu_graph from "./leaky-relu-graph.svg";
import {AutoAnimate} from "../../components/AutoAnimate.tsx";
import {Column, ColumnLayout} from "../../components/ColumnLayout.tsx";
import QRCode from "react-qr-code";

export const NeuralNetworkFromScratch = ({scroll}: PresentationProps) => (
    <Deck title={"Neural network from scratch"} scroll={scroll}>
      <AvisiLogoSlide/>

      {/* TITLE */}
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h1 className={styles.title}>Neural network from scratch<Emphasis>.</Emphasis></h1>
        <h2 className={styles.subtitle}>AI under the hood,
          a <Emphasis>gentle</Emphasis> introduction<Emphasis>.</Emphasis></h2>
      </section>

      {/* Who am I? */}
      <WhoAmISlide/>

      {/* AGENDA */}
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h1>Neural network from scratch<Emphasis>.</Emphasis></h1>
        <h2 className={styles.subtitle}>Agenda<Emphasis>.</Emphasis></h2>
        <ul>
          <li>What are we building?</li>
          <li>The neuron</li>
          <li>Training a neuron</li>
          <li>What is a neural network?</li>
          <li>Training a neural network</li>
        </ul>
      </section>

      {/* DISCLAIMER */}
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h1>Disclaimer<Emphasis>:</Emphasis></h1>
        <h1 className={styles.subtitle}>I am not an expert<Emphasis>!</Emphasis></h1>
      </section>

      {/* WHAT ARE WE BUILDING? */}
      <section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>What are we building<Emphasis>?</Emphasis></h1>
          <h2 className={styles.subtitle}>A neural network<br/>trained to recognize handwritten digits</h2>
        </section>

        <AutoAnimate>
          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>What are we building<Emphasis>?</Emphasis></h1>
                <h2 className={styles.subtitle}>A neural network<br/>trained to recognize handwritten digits</h2>
              </Column>
              <Column centerVertically>
                <h3 className={styles.subtitle}>Examples</h3>
                <img src={handwritten_digits} alt={"Handwritten digits"}/>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>What are we building<Emphasis>?</Emphasis></h1>
                <h2 className={styles.subtitle}>A neural network<br/>trained to recognize handwritten digits</h2>
              </Column>
              <Column centerVertically>
                <h3 className={styles.subtitle}>We're working with</h3>
                <table>
                  <tbody>
                  <tr>
                    <td><Emphasis>training samples</Emphasis></td>
                    <td style={{whiteSpace: "nowrap"}}>60.000</td>
                  </tr>
                  <tr>
                    <td><Emphasis>image dimensions</Emphasis></td>
                    <td style={{whiteSpace: "nowrap"}}>28x28 pixels</td>
                  </tr>
                  <tr>
                    <td><Emphasis>color depth</Emphasis></td>
                    <td>grayscale</td>
                  </tr>
                  <tr>
                    <td><Emphasis>target accuracy</Emphasis></td>
                    <td>&gt;95%</td>
                  </tr>
                  </tbody>
                </table>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>What are we building<Emphasis>?</Emphasis></h1>
                <h2 className={styles.subtitle}>A neural network<br/>trained to recognize handwritten digits</h2>
              </Column>
              <Column centerVertically>
                <h3 className={styles.subtitle}>Network architecture</h3>
                <img src={neural_network} alt={"Neural network diagram"}/>
              </Column>
            </ColumnLayout>
          </section>
        </AutoAnimate>
      </section>

      {/* THE NEURON */}
      <section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>The neuron<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>The basic computational unit of a neural network<Emphasis>.</Emphasis></h2>
        </section>

        <AutoAnimate>
          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>The neuron<Emphasis>.</Emphasis></h1>
                <h2 className={styles.subtitle}>The basic computational unit of a neural network<Emphasis>.</Emphasis>
                </h2>
              </Column>
              <Column centerVertically>
                <ul>
                  <li>Takes 1 or more <Emphasis>numerical inputs</Emphasis></li>
                  <li>Calculates a <Emphasis>weighted sum</Emphasis> of given inputs</li>
                  <li>Produces an <Emphasis>output signal</Emphasis> using an <Emphasis>activation function</Emphasis>
                  </li>
                </ul>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>The neuron<Emphasis>.</Emphasis></h1>
                <h2 className={styles.subtitle}>The basic computational unit of a neural network<Emphasis>.</Emphasis>
                </h2>
              </Column>
              <Column centerVertically>
                <img src={neuron} alt={"Neuron diagram"}/>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>The neuron<Emphasis>.</Emphasis></h1>
                <h2 className={styles.subtitle}>The basic computational unit of a neural network<Emphasis>.</Emphasis>
                </h2>
              </Column>
              <Column centerVertically>
                <p><b>Example<Emphasis>:</Emphasis></b> A perceptron</p>
                <img src={perceptron} alt={"Perceptron diagram"}/>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.WhiteWithFooter}>
            <h1 className={styles.title}>The neuron<Emphasis>.</Emphasis></h1>
            <h2 className={styles.subtitle}>Activation functions<Emphasis>.</Emphasis></h2>
          </section>

          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>The neuron<Emphasis>.</Emphasis></h1>
                <h2 className={styles.subtitle}>Activation functions<Emphasis>.</Emphasis></h2>
                <p><Emphasis>Comparator</Emphasis></p>
                <p>{"\\[\\displaystyle f(x) = \\begin{cases} 1 & \\text{if } x \\geq 0 \\\\ 0 & \\text{if } x < 0 \\end{cases} \\]"}</p>
              </Column>
              <Column centerVertically>
                <img src={comparator_graph} alt={"Comparator graph"} width={"100%"}/>
                <p className={"fragment"}>
                  <b>Problem<Emphasis>:</Emphasis></b> If the output is wrong, we don't know how far off it is.
                </p>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>The neuron<Emphasis>.</Emphasis></h1>
                <h2 className={styles.subtitle}>Activation functions<Emphasis>.</Emphasis></h2>
                <p><Emphasis>Leaky ReLU</Emphasis></p>
                <p>{"\\[\\displaystyle f(x) = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ \\alpha x & \\text{if } x < 0 \\end{cases} \\]"}</p>
                <p><Emphasis>&alpha;</Emphasis>: a small constant (typically 0,01),
                  controlling the slope for negative inputs.</p>
              </Column>
              <Column centerVertically>
                <img src={leaky_relu_graph} alt={"Leaky ReLU graph"} width={"100%"}/>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.WhiteWithFooter}>
            <h1 className={styles.title}>The neuron<Emphasis>.</Emphasis></h1>
            <h2 className={styles.subtitle}>⚙️ <b>Demo<Emphasis>:</Emphasis></b> Let's build a
              neuron<Emphasis>!</Emphasis></h2>
          </section>
        </AutoAnimate>
      </section>

      {/* TRAINING A NEURON */}
      <section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>Training a neuron<Emphasis>.</Emphasis></h1>
        </section>

        <AutoAnimate>
          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>Training a neuron<Emphasis>.</Emphasis></h1>
                <h2 className={styles.subtitle}>🤔 What does that even mean<Emphasis>?</Emphasis></h2>
              </Column>
              <Column centerVertically>
                <h3 className={styles.subtitle}>Training</h3>
                <p>
                  Finding values for the <Emphasis>weights</Emphasis> and <Emphasis>bias</Emphasis> of a neuron, so its
                  output <Emphasis>approximates</Emphasis> the <Emphasis> desired outputs</Emphasis> for a given set
                  of <Emphasis>training samples</Emphasis><sup>*</sup>.
                </p>
                <p className={"fragment"}>
                  <small><sup>*</sup>Input values for
                    the <Emphasis>neuron</Emphasis> for which we know the <Emphasis>desired
                      output</Emphasis> value.</small>
                  <img src={handwritten_digits} alt={"Training samples"}/>
                </p>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>Training a neuron<Emphasis>.</Emphasis></h1>
                <h2 className={styles.subtitle}>Training process in one sentence</h2>
              </Column>
              <Column centerVertically>
                <p>
                  <span className={"fragment"}>Show the neuron many <Emphasis>training samples</Emphasis>, </span>
                  <span className={"fragment"}>and after each one make a small correction to
                    its <Emphasis>weights</Emphasis> and <Emphasis>bias</Emphasis>, </span>
                  <span className={"fragment"}> so that it slowly gets better at producing the
                    correct<sup>*</sup> <Emphasis>output</Emphasis></span>
                  <span className={"fragment"}> for every<sup>**</sup> <Emphasis>training sample</Emphasis>.</span>
                </p>
                <p>
                  <small className={"fragment"}><sup>*</sup>In practice this is a close-enough approximation</small>
                  <br/>
                  <small className={"fragment"}><sup>**</sup>In practice this means as many as possible, 100% accuracy is
                    usually not achievable</small>
                </p>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>Training a neuron<Emphasis>.</Emphasis></h1>
                <h2 className={styles.subtitle}>Training process, in more detail</h2>
              </Column>
              <Column centerVertically>
                <ol>
                  <li className={"fragment"} data-fragment-index={"0"}>⚡️
                    Initialize <Emphasis>weights</Emphasis> and <Emphasis>bias</Emphasis> randomly
                  </li>
                  <li className={"fragment"} data-fragment-index={"1"}>
                    Repeat for <Emphasis>#</Emphasis> samples/epochs
                    <ol style={{listStyleType: "upper-roman"}}>
                      <li className={"fragment"} data-fragment-index={"1"}>
                        ⚙️ <Emphasis>Activate</Emphasis> the neuron
                      </li>
                      <li className={"fragment"} data-fragment-index={"2"}>
                        🤨 How far off is it? Determine the <Emphasis>error</Emphasis> by comparing the <Emphasis>actual
                        output</Emphasis> with the <Emphasis>desired output</Emphasis>
                      </li>
                      <li className={"fragment"} data-fragment-index={"3"}>
                        📈 Adjust the <Emphasis>weights</Emphasis> and <Emphasis>bias</Emphasis> by a tiny
                        fraction<sup>*</sup> of the <Emphasis>error</Emphasis>
                      </li>
                      <li className={"fragment"} data-fragment-index={"4"}>
                        💡 Next time we encounter this training sample, the <Emphasis>error</Emphasis> will be
                        lower<sup>**</sup>
                      </li>
                    </ol>
                  </li>
                </ol>
                <p>
                  <br/>
                  <small className={"fragment"} data-fragment-index={"3"}>
                    <sup>*</sup>We call this the <Emphasis>learning rate</Emphasis>
                  </small>
                  <small className={"fragment"} data-fragment-index={"4"}>
                    <sup>**</sup><Emphasis>actual output</Emphasis> will be a little bit closer to the <Emphasis>desired
                    output</Emphasis>
                  </small>
                </p>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>Training a neuron<Emphasis>.</Emphasis></h1>
                <h2 className={styles.subtitle}>⚙️ <b>Demo<Emphasis>:</Emphasis></b> Let's train A NAND gate</h2>
              </Column>
              <Column centerVertically>
                <h3 className={styles.subtitle}>Schematic overview</h3>
                <img src={nand_gate} alt="NAND gate diagram"/>
              </Column>
            </ColumnLayout>
          </section>
        </AutoAnimate>
      </section>

      {/* WHAT IS A NEURAL NETWORK? */}
      <section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>What is a neural network<Emphasis>?</Emphasis></h1>
        </section>

        <AutoAnimate>
          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>What is a neural network<Emphasis>?</Emphasis></h1>
                <img src={neural_network} alt="Neural network diagram" width={"100%"}/>
              </Column>
              <Column centerVertically>
                <h3 className={styles.subtitle}>Layers of interconnected neurons</h3>
                <ul>
                  <li className={"fragment"}>
                    Every circle in the input layer is one <Emphasis>input value</Emphasis>. In our case,
                    this is the grayscale of one pixel of the input image.
                  </li>
                  <li className={"fragment"}>Every circle in the hidden and output layer is a <Emphasis>neuron</Emphasis>
                  </li>
                  <li className={"fragment"}>Every line is a <Emphasis>connection</Emphasis> between two neurons</li>
                  <li className={"fragment"}>Every neuron's output is passed to <Emphasis>all neurons</Emphasis> in the
                    next layer
                  </li>
                  <li className={"fragment"}>This is a <Emphasis>fully
                    connected</Emphasis>, <Emphasis>feedforward</Emphasis> network
                  </li>
                  <li className={"fragment"}>There are many more network architectures</li>
                </ul>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>What is a neural network<Emphasis>?</Emphasis></h1>
                <h2 className={styles.subtitle}>Layers of interconnected neurons</h2>
              </Column>
              <Column centerVertically>
                <h3 className={styles.subtitle}>Output layer</h3>
                <p>
                  The output neuron with the <Emphasis>highest output</Emphasis> is the prediction of the neural network.
                </p>
                <img src={neural_network} alt="Neural network diagram" width={"100%"}/>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.WhiteWithFooter}>
            <h1 className={styles.title}>What is a neural network<Emphasis>?</Emphasis></h1>
            <h2 className={styles.subtitle}>⚙️ <b>Demo<Emphasis>:</Emphasis></b> Let's build a neural
              network<Emphasis>!</Emphasis></h2>
          </section>
        </AutoAnimate>
      </section>

      {/* TRAINIG A NEURAL NETWORK */}
      <section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>Training a neural network<Emphasis>.</Emphasis></h1>
        </section>

        <AutoAnimate>
          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>Training a neural network<Emphasis>.</Emphasis></h1>
              </Column>
              <Column centerVertically>
                <h3 className={styles.subtitle}>Training process in one sentence</h3>
                <p>
                  <span className={"fragment"}>Show the neural network many <Emphasis>training samples</Emphasis>, </span>
                  <span className={"fragment"}>and after each one make a small correction to
                    the <Emphasis>weights</Emphasis> and <Emphasis>bias</Emphasis> of all neurons, </span>
                  <span className={"fragment"}> so that it slowly gets better at producing the
                    correct<sup>*</sup> <Emphasis>output</Emphasis></span>
                  <span className={"fragment"}> for every<sup>**</sup> <Emphasis>training sample</Emphasis>.</span>
                </p>
                <p>
                  <small className={"fragment"}><sup>*</sup>In practice this is a close-enough approximation</small>
                  <br/>
                  <small className={"fragment"}><sup>**</sup>In practice this means as many as possible, 100% accuracy is
                    usually not achievable</small>
                </p>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>Training a neural network<Emphasis>.</Emphasis></h1>
              </Column>
              <Column centerVertically>
                <h3 className={styles.subtitle}>Backpropagation</h3>
                <p>Propagate the <Emphasis>error</Emphasis> of each neuron in the output
                  layer <Emphasis>backwards</Emphasis> to the hidden layers.</p>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>Training a neural network<Emphasis>.</Emphasis></h1>
              </Column>
              <Column centerVertically>
                <h3 className={styles.subtitle}>The <Emphasis>error</Emphasis> of a "hidden" neuron 🤔</h3>
                <p>The <Emphasis>weighed sum</Emphasis> of the <Emphasis>errors</Emphasis>'s of all neurons in the
                  next layer.</p>
                <small>The <Emphasis>weight</Emphasis> of each <Emphasis>error</Emphasis> is the weight of
                  the <Emphasis>connection</Emphasis> to the neuron in the next layer.</small>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.WhiteWithFooter}>
            <h1 className={styles.title}>Training a neural network<Emphasis>.</Emphasis></h1>
            <h2 className={styles.subtitle}>⚙️ <b>Demo<Emphasis>:</Emphasis></b> Let's make it
              visual<Emphasis>!</Emphasis></h2>
          </section>
        </AutoAnimate>
      </section>

      {/* CONSIDERATIONS */}
      <section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>Considerations<Emphasis>.</Emphasis></h1>
        </section>

        <AutoAnimate>
          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>Considerations<Emphasis>.</Emphasis></h1>
                <h2 className={styles.subtitle}>Bias<Emphasis>.</Emphasis></h2>
              </Column>
              <Column centerVertically>
                <p>When you teach a model using examples that don't fairly represent the real world, it picks up those
                  unfair patterns and repeats them in its answers.</p>
                <div className={"fragment"}>
                  <p><b>Example<Emphasis>:</Emphasis></b></p>
                  <p>Train face recognition using only images of people with light skin. It will perform poorly on darker
                    skinned people.</p>
                </div>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>Considerations<Emphasis>.</Emphasis></h1>
                <h2 className={styles.subtitle}>Distribution shift<Emphasis>.</Emphasis></h2>
              </Column>
              <Column centerVertically>
                <p>When real world data looks different from the training data.</p>
                <div className={"fragment"}>
                  <p><b>Example<Emphasis>:</Emphasis></b></p>
                  <p>Train on neatly written digits. Real world consists mostly of sloppy handwriting.</p>
                </div>
              </Column>
            </ColumnLayout>
          </section>

          <section data-background={Backgrounds.RightHalfGrayWithFooter}>
            <ColumnLayout>
              <Column centerVertically>
                <h1>Considerations<Emphasis>.</Emphasis></h1>
                <h2 className={styles.subtitle}>Questions to think about<Emphasis>.</Emphasis></h2>
              </Column>
              <Column centerVertically>
                <ul>
                  <li>To what extent does a model <Emphasis>generalize</Emphasis>?</li>
                  <li>To what extent does a model <Emphasis>understand</Emphasis>?</li>
                </ul>
              </Column>
            </ColumnLayout>
          </section>
        </AutoAnimate>
      </section>

      {/* FURTHER READING */}
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h1 className={styles.title}>Further reading/watching<Emphasis>.</Emphasis></h1>
        <ul>
          <li>The talk that inspired this talk<br/>
            <a href="https://www.youtube.com/watch?v=z8DY5DndmxI" target="_blank" rel="noreferrer">
              Writing a Neural Net from Scratch - Joe Albahari
            </a></li>
          <li>Why do neural networks work?<br/>
            <a href="https://en.wikipedia.org/wiki/Universal_approximation_theorem" target="_blank" rel="noreferrer">
              Wikipedia: Universal Approximation Theorem
            </a></li>
          <li>More details on backpropagation<br/>
            <a href="https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/" target="_blank"
               rel="noreferrer">
              A Step by Step Backpropagation Example
            </a></li>
        </ul>
      </section>

      {/* THANK YOU! */}
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h1 className={styles.title}>Thank you<Emphasis>!</Emphasis></h1>
        <h2 className={styles.subtitle}>Links</h2>
        <ColumnLayout>
          <Column>
            <a href={"https://presentations.dirkgroot.nl/neural-network-from-scratch"} target={"_blank"}>
              Slides
            </a>
          </Column>
          <Column>
            <a href={"https://gist.github.com/dirkgroot/3f0e29c4be84da910282ed5bccaf4feb"} target={"_blank"}>
              Sample code for a neuron and a neural network
            </a>
          </Column>
          <Column>
            <a href={"https://github.com/dirkgroot/neural-network-playground"} target={"_blank"}>
              Neural network playground
            </a>
          </Column>
        </ColumnLayout>
        <br/>
        <ColumnLayout>
          <Column>
            <QRCode value={"https://presentations.dirkgroot.nl/neural-network-from-scratch"}/>
          </Column>
          <Column>
            <QRCode value={"https://gist.github.com/dirkgroot/3f0e29c4be84da910282ed5bccaf4feb"}/>
          </Column>
          <Column>
            <QRCode value={"https://github.com/dirkgroot/neural-network-playground"}/>
          </Column>
        </ColumnLayout>
      </section>
    </Deck>
  )
;
