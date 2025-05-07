import styles from "./Presentation.module.scss";
import {Deck} from "../components/Deck.tsx";
import {Emphasis} from "../components/Emphasis.tsx";
import {MermaidDiagram} from "@lightenna/react-mermaid-diagram";
import {Backgrounds} from "../components/Backgrounds.tsx";
import {Column, ColumnLayout} from "../components/ColumnLayout.tsx";
import {Avisi25JaarSlide} from "../slides/Avisi25JaarSlide.tsx";
import {AutoAnimate} from "../components/AutoAnimate.tsx";
import {Code} from "../components/Code.tsx";
import {PresentationProps} from "./PresentationProps.tsx";
import {WhoAmISlide} from "../slides/WhoAmISlide.tsx";

const developerWorkflowDiagram =
  `%%{init: {'themeVariables': { 'fontFamily': 'Poppins', 'fontSize': '26px' }}}%%
graph TD
    type_code(Make change) --> submit_mr(Submit or update PR)
    submit_mr ==>|Pipeline fails| type_code
    submit_mr -->|Pipeline passes| review_mr(Wait for review)
    review_mr ==>|Changes needed| type_code
    review_mr -->|Approved, so merge| manual_test(Wait for manual test)
    manual_test -->|Pass| done(Done)
    manual_test ==>|Fail| type_code
`;
const developerWorkflowDiagramWithRedLinks1 = developerWorkflowDiagram + "    linkStyle 0,1 stroke:red,stroke-width:5px,color:red\n";
const developerWorkflowDiagramWithRedLinks2 = developerWorkflowDiagram + "    linkStyle 0,2,3 stroke:red,stroke-width:5px,color:red\n";
const developerWorkflowDiagramWithRedLinks3 = developerWorkflowDiagram + "    linkStyle 0,2,4,6 stroke:red,stroke-width:5px,color:red\n";

export const DesigningWithTypesJava = ({scroll}: PresentationProps) => (
  <Deck title={"Designing with types"} scroll={scroll}>
    {/* Avisi logo(s) */}
    <Avisi25JaarSlide/>

    {/* Who am I? */}
    <WhoAmISlide/>

    {/* Title */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Designing with types<Emphasis>.</Emphasis></h1>
      <h2 className={styles.subtitle}>An exploration</h2>
    </section>

    {/* Feedback loops */}
    <section>
      <AutoAnimate unmatched={false}>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <ColumnLayout>
            <Column>
              <h1>Feedback loops<Emphasis>.</Emphasis></h1>
            </Column>
            <Column>
              <MermaidDiagram id="workflow0" data-id="dev-workflow-diagram" className={`${styles.child} fragment`}>
                {developerWorkflowDiagram}
              </MermaidDiagram>
            </Column>
          </ColumnLayout>
        </section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <ColumnLayout>
            <Column>
              <h1>Feedback loops<Emphasis>.</Emphasis></h1>
              <ul>
                <li>Code - commit - push - 😕</li>
              </ul>
            </Column>
            <Column>
              <MermaidDiagram id="workflow1" data-id="dev-workflow-diagram" className={styles.child}>
                {developerWorkflowDiagramWithRedLinks1}
              </MermaidDiagram>
            </Column>
          </ColumnLayout>
        </section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <ColumnLayout>
            <Column>
              <h1>Feedback loops<Emphasis>.</Emphasis></h1>
              <ul>
                <li>Code - commit - push - 😕</li>
                <li>Code - commit - push - review - 😢</li>
              </ul>
            </Column>
            <Column>
              <MermaidDiagram id="workflow2" data-id="dev-workflow-diagram" className={styles.child}>
                {developerWorkflowDiagramWithRedLinks2}
              </MermaidDiagram>
            </Column>
          </ColumnLayout>
        </section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <ColumnLayout>
            <Column>
              <h1>Feedback loops<Emphasis>.</Emphasis></h1>
              <ul>
                <li>Code - commit - push - 😕</li>
                <li>Code - commit - push - review - 😢</li>
                <li>Code - commit - push - review - test - 🤬</li>
              </ul>
            </Column>
            <Column>
              <MermaidDiagram id="workflow3" data-id="dev-workflow-diagram" className={styles.child}>
                {developerWorkflowDiagramWithRedLinks3}
              </MermaidDiagram>
            </Column>
          </ColumnLayout>
        </section>
      </AutoAnimate>

      <section data-background={Backgrounds.RightHalfGrayWithFooter}>
        <ColumnLayout>
          <Column>
            <h1>Finding bugs<Emphasis>.</Emphasis></h1>
            <ul className="fragment">
              <li>Code review</li>
              <li>Automated tests</li>
              <li>Manual / exploratory tests</li>
              <li>Acceptance tests</li>
              <li>In production 😱</li>
            </ul>
          </Column>
          <Column>
            <h1 className="fragment"><Emphasis>Preventing</Emphasis> bugs<Emphasis>.</Emphasis></h1>
            <ul className="fragment">
              <li>Refinement</li>
              <li>Small, safe steps</li>
              <li>Test-Driven Development</li>
              <li>🎇 <Emphasis><b>Design</b></Emphasis> 🎇</li>
            </ul>
          </Column>
        </ColumnLayout>
        <p>&nbsp;</p>
        <ColumnLayout>
          <Column className="fragment">
            <iframe src="https://giphy.com/embed/mGK1g88HZRa2FlKGbz" width="auto" height="240px"
                    className={`${styles.dropShadow} ${styles.frame}`}></iframe>
          </Column>
          <Column className="fragment">
            <iframe src="https://giphy.com/embed/26ufdipQqU2lhNA4g" width="auto" height="240px"
                    className={`${styles.dropShadow} ${styles.frame}`}></iframe>
          </Column>
        </ColumnLayout>
      </section>

      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>
            <span data-id="asdf1">Fixing bugs is </span>
            <Emphasis>cheaper</Emphasis><sup>*</sup>
            <span data-id="asdf2"> when we </span>
            <Emphasis>catch them early</Emphasis>
          </h1>
          <p><sup>*</sup> In terms of time, people, efficiency</p>
        </section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>
            <span data-id="asdf1">Fixing bugs is </span>
            <Emphasis>not a thing</Emphasis>
            <span data-id="asdf2"> when we </span>
            <Emphasis>can't introduce them</Emphasis>
          </h1>
        </section>
      </AutoAnimate>
    </section>

    {/* Designing with types introduction */}
    <section>
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h1>Designing with types<Emphasis>.</Emphasis></h1>
        <h2 className={styles.subtitle}>Making illegal states <Emphasis>unrepresentable</Emphasis></h2>
      </section>

      <section data-background={Backgrounds.WhiteWithFooter}>
        <h1>Goal<Emphasis>.</Emphasis></h1>
        <h2 className={styles.subtitle}>Create an API that...</h2>
        <ul>
          <li className="fragment">is <Emphasis><b>safe</b></Emphasis> to use</li>
          <li className="fragment">reveals <Emphasis><b>intent</b></Emphasis></li>
        </ul>
        <aside className="notes">
          Het gaat hier om de API die vanuit de "buitenste" lagen van de architectuur gebruikt wordt. Het idee is dat
          het "domeinmodel" altijd safe is om te gebruiken. Eventuele runtime fouten zouden vooral in die buitenste laag
          voor moet komen, niet in het "domeinmodel".
        </aside>
      </section>
    </section>

    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1>How do we do this<Emphasis>?</Emphasis></h1>
      <h2 className={styles.subtitle}>Let's find out what is possible, using some examples</h2>
      <ul>
        <li className={"fragment"}>Properties</li>
        <li className={"fragment"}>Simple business rules</li>
        <li className={"fragment"}>Statuses</li>
        <li className={"fragment"}>Ownership</li>
        <li className={"fragment"}>Deleting stuff</li>
        <li className={"fragment"}>Statuses revisited</li>
      </ul>
    </section>

    {/* Example 1: Immutability, value objects */}
    <section>
      <AutoAnimate>
        {/* Original */}
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Properties<Emphasis>.</Emphasis></h1>
        </section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Properties<Emphasis>.</Emphasis></h1>
          <Code language="java" lineNumbers>{`
            class Customer {
              private Long id;
              private String name;
              private String emailAddress;

              public Long getId() { return id; }
              public void setId(Long id) { this.id = id; }
              public String getName() { return name; }
              public void setName(String name) { this.name = name; }
              // ...
            }
          `}</Code>
        </section>
        {/* Make it safe */}
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Properties<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>Make it <Emphasis><b>safe</b></Emphasis></h2>
          <p>Introduce immutability</p>
          <Code language="java" lineNumbers="|2,6,8">{`
            class Customer {
              private final Long id;
              private String name;
              private String emailAddress;

              public Customer(Long id, String name, String emailAddress) { this.id = id; /* ... */ }

              public Long getId() { return id; }
              public String getName() { return name; }
              public void setName(String name) { this.name = name; }
              // ...
            }
          `}</Code>
        </section>
        {/* Reveal intent */}
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Properties<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>Reveal <Emphasis><b>intent</b></Emphasis></h2>
          <p>Introduce value objects</p>
          <Code language="java" lineNumbers="3,4,6,9,10|14-15">{`
            public class Customer {
              private final Long id;
              private CustomerName name;
              private EmailAddress emailAddress;

              public Customer(Long id, CustomerName name, EmailAddress emailAddress) { this.id = id; /* ... */ }

              public Long getId() { return id; }
              public CustomerName getName() { return name; }
              public void setName(CustomerName name) { this.name = name; }
              // ...
            }

            record CustomerName(String value) { CustomerName { /* validate */ } }
            record EmailAddress(String value) { EmailAddress { /* validate */ } }
          `}</Code>
        </section>
      </AutoAnimate>
    </section>

    {/* Example 2: Business methods instead of plain setters */}
    <section>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Simple business rules<Emphasis>.</Emphasis></h1>
        </section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Simple business rules<Emphasis>.</Emphasis></h1>
          <ColumnLayout>
            <Column>
              <Code language="java" lineNumbers>{`
                public class OrderService {
                  public void completeOrder(Order order) {
                    if (order.paymentId != null)
                      order.setStatus(OrderStatus.COMPLETED);
                  }
                }
              `}</Code>
            </Column>
            <Column>
              <Code language="java" lineNumbers>{`
                public class Order {
                  private final long id;
                  private final long customerId;
                  private OrderStatus status;
                  private Long paymentId;

                  public void setStatus(OrderStatus status) {
                    this.status = status;
                  }
                  // more getters and setters
                }
              `}</Code>
            </Column>
          </ColumnLayout>
          <p className="fragment"><Emphasis><b>Intent</b></Emphasis> is pretty clear, but scattered. This design is
            not <Emphasis><b>safe</b></Emphasis>.</p>
        </section>
      </AutoAnimate>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Simple business rules<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>Make it <Emphasis><b>safe</b></Emphasis></h2>
          <Code language="java" lineNumbers>{`
            public class Order {
              private final long id;
              private final long customerId;
              private OrderStatus status;
              private Long paymentId;

              public void setStatus(OrderStatus status) {
                this.status = status;
              }
              // more getters and setters
            }
          `}</Code>
        </section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Simple business rules<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>Make it <Emphasis><b>safe</b></Emphasis></h2>
          <Code language="java" lineNumbers="7-9|12-15">{`
            public class Order {
              private final long id;
              private final long customerId;
              private OrderStatus status;
              private Long paymentId;

              // public void setStatus(OrderStatus status) {
              //   this.status = status;
              // }
              // more getters and setters

              public void complete() {
                if (paymentId != null)
                  status = OrderStatus.COMPLETED;
              }
            }
          `}</Code>
          <p className="fragment"><Emphasis><b>Intent</b></Emphasis> is now clearer as well,
            because <Emphasis><code>complete</code></Emphasis> is part of
            the <Emphasis><code>Order</code></Emphasis> class.</p>
        </section>
      </AutoAnimate>
    </section>

    {/* Example 3: Statuses (factories instead of constructors) */}
    <section>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Statuses<Emphasis>.</Emphasis></h1>
        </section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Statuses<Emphasis>.</Emphasis></h1>
          <Code language="java" lineNumbers>{`
            class Order {
              private OrderStatus status = OrderStatus.PENDING;

              public OrderStatus getStatus() { return status; }
            }
          `}</Code>
          <p className="fragment">The type signature does not reveal <Emphasis><b>intent</b></Emphasis>.</p>
        </section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Statuses<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>Reveal <Emphasis><b>intent</b></Emphasis></h2>
          <Code language="java" lineNumbers={"|4,8"}>{`
            class Order {
              private OrderStatus status;

              private Order(OrderStatus status) { this.status = status; }

              public OrderStatus getStatus() { return status; }

              public static Order createPending() { return new Order(OrderStatus.PENDING); }
            }
          `}</Code>
          <p className="fragment"><Emphasis><b>Intent</b></Emphasis> is now clear in the type
            signature <Emphasis><b>and</b></Emphasis> everywhere <Emphasis><code>createPending</code></Emphasis> is
            used!</p>
        </section>
      </AutoAnimate>
    </section>

    {/* Example 4: Ownership */}
    <section>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Ownership<Emphasis>.</Emphasis></h1>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Ownership<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>This looks pretty <Emphasis><b>safe</b></Emphasis>, right?</h2>
          <Code language="java" lineNumbers>{`
            public class Order {
              private OrderStatus status;
              private List<OrderItem> items = new ArrayList<>();

              public void addItem(OrderItem item) {
                if (status == OrderStatus.PENDING)
                  items.add(item);
              }
            }
          `}</Code>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Ownership<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>Uhm... 🤔</h2>
          <Code language="java" lineNumbers={"11-13"}>{`
            public class Order {
              private OrderStatus status;
              private List<OrderItem> items = new ArrayList<>();

              public void addItem(OrderItem item) {
                if (status == OrderStatus.PENDING)
                  items.add(item);
              }
            }
  
            interface OrderItemRepository {
              void insert(OrderItem orderItem);
            }
          `}</Code>
          <p className="fragment">We can violate a business rule by
            calling <Emphasis><code>insert</code></Emphasis> on <Emphasis><code>OrderItemRepository</code></Emphasis>!
          </p>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Ownership<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>Reveal <Emphasis><b>intent</b></Emphasis></h2>
          <Code language="java" lineNumbers={"2-5"}>{`
            public class Order {
              public void addItem(Product product, int quantity) {
                if (status == OrderStatus.PENDING)
                  items.add(new OrderItem(this.id, product, quantity));
              }              
            }
  
            interface OrderItemRepository {
              void insert(OrderItem orderItem);
            }
          `}</Code>
          <p className="fragment">The type signature of <Emphasis><code>addItem</code></Emphasis> reveals
            that <Emphasis><code>Order</code></Emphasis> is responsible for
            creating <Emphasis><code>OrderItem</code></Emphasis>s.</p>
          <p className="fragment">The <Emphasis><code>insert</code></Emphasis> function still
            isn't <Emphasis><b>safe</b></Emphasis>.</p>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Ownership<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>Constrain <Emphasis><code>OrderItem</code></Emphasis> instantiation</h2>
          <div className={"fragment"}>
            <p>We can make <Emphasis><code>OrderItem</code></Emphasis> an inner class with a private constructor.</p>
            <Code language="java" lineNumbers>{`
              public class Order {
                public static class OrderItem {
                  private OrderItem(Long orderId, Product product, int quantity) { /* initialization */ }
                }
                
                public void addItem(Product product, int quantity) {
                  if (status == OrderStatus.PENDING)
                    items.add(new OrderItem(this.id, product, quantity));
                }
              }
            `}</Code>
            <p className={"fragment"}>This design
              is <Emphasis><b>safe</b></Emphasis> because <Emphasis><code>OrderItem</code></Emphasis> cannot be
              instantiated outside of <Emphasis><code>Order</code></Emphasis>.</p>
          </div>
        </section>
      </AutoAnimate>
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h1>Ownership<Emphasis>.</Emphasis></h1>
        <h2 className={styles.subtitle}>Constrain <Emphasis><code>OrderItem</code></Emphasis> instantiation</h2>
        <Code language="java" lineNumbers={"2|4-7|11-13"}>{`
          public class OrderItem {
            private OrderItem(Long id, Product product, int quantity) { /* initialization */ }

            public static OrderItem createForOrder(Order order, Product product, int quantity) {
              assert order.getStatus() == OrderStatus.PENDING : "Order is not pending";
              return new OrderItem(order.getId(), product, quantity);
            }
          }

          public class Order {
            public void addItem(Product product, int quantity) {
              items.add(OrderItem.createForOrder(this, product, quantity))
            }              
          }
        `}</Code>
        <p className="fragment">It's <Emphasis><b>safe</b></Emphasis>!</p>
        <p className="fragment">It's clunky. Responsibility for checking order status
          in <Emphasis><code>OrderItem</code></Emphasis>, instead of <Emphasis><code>Order</code></Emphasis> 😐.</p>
      </section>
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h1>Ownership<Emphasis>.</Emphasis></h1>
        <h2 className={styles.subtitle}>Constrain <Emphasis><code>OrderItem</code></Emphasis> instantiation</h2>
        <p>Alternative solution using Java modules</p>
        <Code language="java" lineNumbers={"|2,3,8,9"}>{`
          public class OrderItem {
            // Package private constructor
            OrderItem(long orderId, long id, Product product, int quantity) { /* initialization */ }
          }

          public class Order {
            public void addItem(Product product, int quantity) {
              if (status == OrderStatus.PENDING)
                items.add(new OrderItem(this.id, product, quantity));
            }              
          }
        `}</Code>
        <p className="fragment">It's <Emphasis><b>safe</b></Emphasis>, when domain code is in a separate module.</p>
        <p className="fragment">But you can still introduce illegal states within the domain module.</p>
      </section>
    </section>

    {/* Example 5: Deleting stuff */}
    <section>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Deleting stuff<Emphasis>.</Emphasis></h1>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Deleting stuff<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>Is this <Emphasis><b>safe</b></Emphasis>?</h2>
          <Code language="java" lineNumbers>{`
            public class Order {
              private OrderStatus status;
              // getters and setters
            }

            public class OrderJDBCRepository implements OrderRepository {
              public void delete(Order order) { /* ... */ }
            }
          `}</Code>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Deleting stuff<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>What if deleting an <Emphasis><code>Order</code></Emphasis> is not always
            allowed?</h2>
          <Code language="java" lineNumbers>{`
            public class Order {
              private OrderStatus status;
              // getters and setters
            }
  
            public class OrderJDBCRepository implements OrderRepository {
              public void delete(Order order) { /* ... */ }
            }
          `}</Code>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Deleting stuff<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>What if deleting an <Emphasis><code>Order</code></Emphasis> is not always
            allowed?</h2>
          <p>Add a runtime check?</p>
          <Code language="java" lineNumbers={"4,8-11"}>{`
            public class Order {
              private OrderStatus status;
              // getters and setters
              public boolean isDeletable() { return status == OrderStatus.COMPLETED; }
            }
  
            public class OrderJDBCRepository implements OrderRepository {
              public void delete(Order order) {
                assert order.isDeletable() : "Order is not deletable";
                // ...
              }
            }
          `}</Code>
          <p className={"fragment"}>This does not really <Emphasis>prevent</Emphasis> errors.</p>
          <p className={"fragment"}>The type signature (partly) reveals <Emphasis><b>intent</b></Emphasis>, but can we
            do better?</p>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Deleting stuff<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>We could introduce a <Emphasis><b>value object</b></Emphasis> instead</h2>
          <Code language="java" lineNumbers={"1-4,9-12|16"}>{`
            public final class DeletableOrder {
              final long id;
              DeletableOrder(long id) { this.id = id }
            }

            public class Order {
              private OrderStatus status;

              public DeletableOrder asDeletable() {
                assert status == OrderStatus.COMPLETED : "Order is not deletable";
                return new DeletableOrder(this.id);
              }
            }
  
            public class OrderJDBCRepository implements OrderRepository {
              public void delete(DeletableOrder order) { /* ... */ }
            }
          `}</Code>
          <p className={"fragment"}>The type signatures reveal <Emphasis><b>intent</b></Emphasis>.</p>
          <p className={"fragment"}>The <Emphasis><code>delete</code></Emphasis> function
            is <Emphasis><b>safe</b></Emphasis> to use. It cannot be used in an invalid way.</p>
          <p className={"fragment"}>
            <Emphasis><code>Optional</code></Emphasis> or <Emphasis><code>null</code></Emphasis> can be used instead of
            throwing an exception.</p>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Deleting stuff<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>We could introduce a <Emphasis><b>value object</b></Emphasis> instead</h2>
          <p>An alternative solution, using the same general approach</p>
          <Code language="java" lineNumbers={"|1-4,9,10"}>{`
            public class DeletableOrder {
              final long id;
              DeletableOrder(long id) { this.id = id; }
            }

            public class Order { /* ... */ }
  
            public class OrderJDBCRepository implements OrderRepository {
              public DeletableOrder findDeletableOrder(long id) { /* ... */ }
              public void delete(DeletableOrder order) { /* ... */ }
            }
          `}</Code>
          <p className={"fragment"}>This works too, but it is somewhat limited.</p>
        </section>
      </AutoAnimate>
    </section>

    {/* Example 6: Statuses revisited */}
    <section>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Statuses revisited<Emphasis>.</Emphasis></h1>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Statuses revisited<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>Can we improve this even further?</h2>
          <Code language="java" lineNumbers>{`
            public class DeletableOrder {
              final long id;
              DeletableOrder(long id) { this.id = id; }
            }

            public class Order {
              private OrderStatus status;

              public DeletableOrder asDeletable() {
                assert status == OrderStatus.COMPLETED : "Order is not deletable";
                return new DeletableOrder(this.id);
              }
            }
  
            public class OrderJDBCRepository implements OrderRepository {
              public void delete(DeletableOrder order) { /* ... */ }
            }
          `}</Code>
          <p className={"fragment"}>The signature of <Emphasis><code>delete</code></Emphasis> does not fully
            reveal <Emphasis><b>intent</b></Emphasis>.</p>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Statuses revisited<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>We could introduce a new type <Emphasis><code>CompletedOrder</code></Emphasis>
          </h2>
          <Code language="java" lineNumbers>{`
            public class CompletedOrder { /* ... */ }

            interface OrderRepository {
              void delete(CompletedOrder order);
            }
          `}</Code>
          <p className={"fragment"}>The type signature of <Emphasis><code>delete</code></Emphasis> now reveals that only
            completed orders can be deleted.</p>
          <p className={"fragment"}>But we cannot change the type of an <Emphasis><code>Order</code></Emphasis> instance
            "on the fly", so how do we go about this? 🤔</p>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Statuses revisited<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>Sum types to the rescue!</h2>
          <Code language="java" lineNumbers>{`
            public sealed interface Order permits PendingOrder, CompletedOrder { /* ... */ }
            public final class PendingOrder implements Order { /* ... */ }
            public final class CompletedOrder implements Order { /* ... */ }

            interface OrderRepository {
              void delete(CompletedOrder order);
            }
          `}</Code>
          <p className={"fragment"}>We model the status of an <Emphasis><code>Order</code></Emphasis> using types,
            instead of <Emphasis>state</Emphasis>.</p>
          <p className={"fragment"}>But now, <Emphasis><code>Order</code></Emphasis> isn't a single object anymore. How
            do we handle state changes?</p>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Statuses revisited<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>Entities ➡️ values</h2>
          <Code language="java" lineNumbers={"|3-5"}>{`
            public sealed interface Order permits PendingOrder, CompletedOrder { /* ... */ }

            public final class PendingOrder implements Order
              public CompletedOrder complete() { /* ... */ }
            }

            public final class CompletedOrder implements Order { /* ... */ }
          `}</Code>
          <p className={"fragment"}>Every state of an entity is an <Emphasis>immutable value</Emphasis>.</p>
          <p className={"fragment"}>Operations result in a <Emphasis>new value</Emphasis> representing the <Emphasis>new
            state</Emphasis>.</p>
          <p className={"fragment"}>Plays well with <Emphasis>concurrency</Emphasis>.</p>
          <p className={"fragment"}><b>Bonus</b>: This is a nice step towards a more <Emphasis>functional
            architecture</Emphasis><br/>(which may be a topic for a future talk 😄).</p>
        </section>
      </AutoAnimate>
    </section>

    {/* Summary of techniques */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1>Techniques<Emphasis>.</Emphasis></h1>
      <table>
        <thead>
        <tr>
          <th>Technique</th>
          <th><Emphasis>Intent</Emphasis></th>
          <th><Emphasis>Safety</Emphasis></th>
        </tr>
        </thead>
        <tbody>
        <tr className="fragment">
          <td><Emphasis>Immutability</Emphasis> and <Emphasis>private setters</Emphasis> instead of public mutable state
          </td>
          <td>↗️</td>
          <td>↗️</td>
        </tr>
        <tr className="fragment">
          <td><Emphasis>Value objects</Emphasis> instead of primitives<br/></td>
          <td>↗️</td>
          <td>↗️</td>
        </tr>
        <tr className="fragment">
          <td><Emphasis>Sum types</Emphasis> instead of enums</td>
          <td>↗️</td>
          <td>↗️</td>
        </tr>
        <tr className="fragment">
          <td><Emphasis>Factories</Emphasis> instead of constructors</td>
          <td>↗️</td>
          <td>&nbsp;</td>
        </tr>
        <tr className="fragment">
          <td><Emphasis>Business methods</Emphasis> instead of plain setters</td>
          <td>↗️</td>
          <td>&nbsp;</td>
        </tr>
        </tbody>
      </table>
    </section>

    {/* Conclusions */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1>Conclusion<Emphasis>.</Emphasis></h1>
      <ul>
        <li className="fragment"><Emphasis>Types</Emphasis> can (should?) play a big role in enforcing business rules
        </li>
        <li className="fragment"><Emphasis>Types</Emphasis> can make your code expressive</li>
        <li className="fragment"><Emphasis>Encapsulation</Emphasis> is the bread and butter of designing with types</li>
        <li className="fragment"><Emphasis>Java</Emphasis> has powerful type systems, and we can probably benefit more
          from this than we currently do
        </li>
        <li className="fragment"><Emphasis>Not all bugs</Emphasis> can be prevented with types</li>
        <li className="fragment">There is <Emphasis>no perfect design</Emphasis>, it's
          all <Emphasis>trade-offs</Emphasis></li>
        <li className="fragment">There is <Emphasis>no perfect programming language</Emphasis></li>
      </ul>
    </section>

    {/* Thanks! */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1>Thank you<Emphasis>!</Emphasis></h1>
      <h2 className={styles.subtitle}>Happy coding 🤓</h2>
    </section>
  </Deck>
);
