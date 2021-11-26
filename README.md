# Examples
## Graph DB
* Use [Apache TinkerPop](https://tinkerpop.apache.org/)
* ``TinkerGraph.open()`` to quickly open embeded graph
* Example, find matches base on preferences
@Todo: implement below example
```
TinkerGraph.open().traversal().
    V().hasLabel("Candidate").hasId("id1").
    V().hasLabel("Candidate").hasId("id2").
    V().hasLabel("Candidate").hasId("id3").
    V().hasLabel("Preference").hasId("preference1").
    V().hasLabel("Preference").hasId("preference2").
    V().hasLabel("Preference").hasId("preference3").
    V("preference1").addE("likes").from("id1").
    ...-
    match(
        _.as("from").out("likes").as("preference"),  //from likes preference
        _.as("preference").in("likes").as("to"),    //to likes preference
        _.as("from").out("matched").count().is(P.lt(1)),  //from has not matched yet
        _.as("to").out("matched").count().is(P.lt(1)),    //to has not matched yet
    ).
    where("from", P.neq("to")). //exclude self match
    select("from", "to").groupCount().next();
    ...

```
## Java
### Optional
#### Nullable to Optional
Use ``Optional.ofNullable()`` to convert function call which could return null, pojo object which has nullable property or nullable variable into Optional and directly use map to convert to other or do sequential parsing.

For example, given POJO object which includes jsonString which is nullable but you want to map this jsonString into object then you could
@TODO: implement below code example
```
Optional.ofNullable(pojoObject.getJsonString()).map(jsonString -> mapper.map(jsonString, targetClass));
```
### Guice
#### Singleton
Use singleton by default.
#### RequestScoped
Annotation ``@RequestScoped`` can be used in webapp. Util classes which require single instance per request can be re-written into normal class then injected in request scope. This way, your code will be more easier to test.
* Need to add [Guice Servlet Extension](https://github.com/google/guice/wiki/Servlets) dependency into project to use it.
### Test
#### Parameterised Test
##### JUnit
@Todo: implement below code example
1. Set runner as ``@RunWith(JUnitParamsRunner.class)``
1. Use ``@Parameters(method = "...")`` to point function returning parameters as Object[][]
1. Use ``@TestCaseName("{method} [{index}: description {0} {1}])`` to make test report more readable  
#### Hamcrest
##### Optional
see java.dev.heungwoo.hamcrest.OptionalTest
##### Customer Matcher
see java.dev.heungwoo.hamcrest.OptionalTest